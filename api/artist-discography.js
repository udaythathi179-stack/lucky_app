/**
 * Lifetime Artist Discography API Handler (api/artist-discography.js)
 * Combines offline curated database with multi-vector live JioSaavn streaming search
 */

const db = require('../database/db');
const { decryptSaavnUrl } = require('../backend/utils/decrypt');
const { cleanHTML, fetchUrl } = require('../backend/utils/helpers');

const discographyCache = new Map();

// Strict artist matchers to prevent unrelated tracks
const SPECIFIC_ARTIST_MATCHERS = {
  's. p. balasubrahmanyam': (t) => /balasubrahmanyam|balasubramanyam|balasubramaniam|spb|\bs\s*p\s*b\b/i.test(t),
  'sid sriram': (t) => /\bsid\s+sriram\b/i.test(t),
  'arijit singh': (t) => /\barijit\b/i.test(t),
  'shreya ghoshal': (t) => /\bshreya\b/i.test(t),
  'anurag kulkarni': (t) => /\banurag\s+kulkarni\b/i.test(t),
  'mangli': (t) => /\bmangli\b|\bsatyavathi\b/i.test(t),
  'sonu nigam': (t) => /\bsonu\s+nigam\b|\bsonu\b/i.test(t),
  'karthik': (t) => /\bkarthik\b/i.test(t),
  'k. s. chithra': (t) => /\bchithra\b|\bchitra\b/i.test(t),
  'kk': (t) => /\bkk\b|\bkrishnakumar\s+kunnath\b/i.test(t),
  'devi sri prasad': (t) => /\bdevi\s+sri\s+prasad\b|\bdsp\b/i.test(t),
  'atif aslam': (t) => /\batif\b/i.test(t),
  'ram miriyala': (t) => /\bmiriyala\b/i.test(t),
  'sunitha': (t) => /\bsunitha\b/i.test(t),
  'jubin nautiyal': (t) => /\bjubin\b/i.test(t),
  'geetha madhuri': (t) => /\bgeetha\s+madhuri\b/i.test(t),
  'haricharan': (t) => /\bharicharan\b|\bhari\s+charan\b/i.test(t),
  'lata mangeshkar': (t) => /\blata\b/i.test(t),
  'kishore kumar': (t) => /\bkishore\b/i.test(t),
  'armaan malik': (t) => /\barmaan\b/i.test(t),
  'udit narayan': (t) => /\budit\b/i.test(t),
  'kumar sanu': (t) => /\bkumar\s+sanu\b|\bsanu\b/i.test(t),
  'alka yagnik': (t) => /\balka\b/i.test(t),
  'mohammed rafi': (t) => /\brafi\b/i.test(t),
  'mohit chauhan': (t) => /\bmohit\s+chauhan\b|\bmohit\b/i.test(t),
  'vishal mishra': (t) => /\bvishal\s+mishra\b/i.test(t),
  'shaan': (t) => /\bshaan\b/i.test(t),
  'shankar mahadevan': (t) => /\bshankar\s+mahadevan\b/i.test(t),
  'asha bhosle': (t) => /\basha\b/i.test(t),
  'neha kakkar': (t) => /\bneha\s+kakkar\b/i.test(t),
  'mika singh': (t) => /\bmika\b/i.test(t),
  'revanth': (t) => /\brevanth\b/i.test(t),
  'rahul sipligunj': (t) => /\bsipligunj\b/i.test(t),
  'ramya behara': (t) => /\bramya\s+beh[ae]?ra\b/i.test(t),
  'vijay yesudas': (t) => /\byesudas\b/i.test(t),
  'madhu priya': (t) => /\bmadhu\s+priya\b/i.test(t),
  'hemachandra': (t) => /\bhemachandra\b|\bhema\s+chandra\b/i.test(t),
  's. p. charan': (t) => /(?:\bs\s*p\s*(?:b\s*)?charan\b|\bspb\s*charan\b|\bs\s*p\s*b\s*charan\b)/i.test(t) || (/\bcharan\b/i.test(t) && !/\bharicharan\b|\bcharan\s*raj\b/i.test(t)),
  'saketh komanduri': (t) => /\bsaketh\b/i.test(t),
  'ed sheeran': (t) => /\bsheeran\b/i.test(t),
  'the weeknd': (t) => /\bweeknd\b/i.test(t),
  'imagine dragons': (t) => /\bimagine\s+dragons\b/i.test(t),
  'dua lipa': (t) => /\bdua\s+lipa\b/i.test(t),
  'justin bieber': (t) => /\bbieber\b/i.test(t),
  'taylor swift': (t) => /\btaylor\s+swift\b|\btaylor\b/i.test(t),
  'coldplay': (t) => /\bcoldplay\b/i.test(t),
  'queen': (t) => /\bqueen\b|\bfreddie\s+mercury\b/i.test(t),
  'michael jackson': (t) => /\bmichael\s+jackson\b|\bmj\b/i.test(t),
  'anirudh ravichander': (t) => /\banirudh\b/i.test(t),
  'santhosh narayanan': (t) => /\bsanthosh\s+narayanan\b/i.test(t),
  'ghantasala': (t) => /\bghantasala\b/i.test(t)
};

function isArtistCredMatch(creds, artistName) {
  if (!creds || !artistName) return false;
  const c = creds.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
  const targetKey = artistName.toLowerCase().trim();

  // 1. Specific artist matcher
  const matcher = SPECIFIC_ARTIST_MATCHERS[targetKey];
  if (matcher) return matcher(c);

  // 2. Exact target match
  const cleanTarget = targetKey.replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
  const escaped = cleanTarget.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (new RegExp('(?:^|\\s)' + escaped + '(?:\\s|$)', 'i').test(c)) return true;

  // 3. Multi-token check excluding solo generic surnames
  const genericTokens = new Set(['singh', 'kumar', 'prasad', 'sri', 'sharma', 'malik', 'roy', 'reddy', 'rao', 'das', 'khan', 'nair', 'gupta', 'verma', 'the', 'and', 'music', 'songs', 'hits']);
  const tokens = cleanTarget.split(/\s+/).filter(tok => tok.length >= 4 && !genericTokens.has(tok));
  if (tokens.length >= 2) {
    return tokens.every(tok => new RegExp('(?:^|\\s)' + tok + '(?:\\s|$)', 'i').test(c));
  } else if (tokens.length === 1 && cleanTarget.length > 5) {
    return new RegExp('(?:^|\\s)' + tokens[0] + '(?:\\s|$)', 'i').test(c);
  }
  return false;
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status ? res.status(200).end() : (res.writeHead(200), res.end());
  }

  const parsedUrl = req.url ? new URL(req.url, 'http://localhost') : null;
  const artistName = (req.query?.name || req.query?.q || parsedUrl?.searchParams.get('name') || parsedUrl?.searchParams.get('q') || '').trim();
  const page = parseInt(req.query?.page || parsedUrl?.searchParams.get('page') || '1', 10);
  const quality = req.query?.quality || parsedUrl?.searchParams.get('quality') || '320';

  if (!artistName) {
    const emptyPayload = { success: true, page: 1, total: 0, results: [] };
    if (res.status) return res.status(200).json(emptyPayload);
    res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
    return res.end(JSON.stringify(emptyPayload));
  }

  const clean = artistName.replace(/[\.\,\(\)]/g, ' ').replace(/\s+/g, ' ').trim();
  const cacheKey = `${clean.toLowerCase()}__p_${page}__q_${quality}`;

  if (discographyCache.has(cacheKey)) {
    const cached = discographyCache.get(cacheKey);
    res.setHeader('Cache-Control', 'public, max-age=3600');
    if (res.status) return res.status(200).json(cached);
    res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8', 'Cache-Control': 'public, max-age=3600' });
    return res.end(JSON.stringify(cached));
  }

  // Pre-load from instant in-memory database on page 1 (0ms latency, handles 100k+ users)
  if (page === 1) {
    const localTracks = db.getArtistTracks(artistName);
    if (Array.isArray(localTracks) && localTracks.length > 0) {
      // Strictly ensure every track belongs to the requested artist
      const validTracks = localTracks.filter(t => isArtistCredMatch(`${t.artist || ''} ${t.title || ''}`, artistName));
      const payload = { success: true, page: 1, total: validTracks.length, results: validTracks };
      discographyCache.set(cacheKey, payload);
      res.setHeader('Cache-Control', 'public, max-age=3600');
      if (res.status) return res.status(200).json(payload);
      res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8', 'Cache-Control': 'public, max-age=3600' });
      return res.end(JSON.stringify(payload));
    }
  }

  // Build targeted multi-query search vectors for page 2+ or artists not in local database
  const seenKeys = new Set();
  const results = [];
  const queries = [];

  if (page === 1) {
    queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=1&n=50&q=${encodeURIComponent(clean)}`);
    queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=1&n=50&q=${encodeURIComponent(clean + ' hits')}`);
  } else if (page === 2) {
    queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=2&n=50&q=${encodeURIComponent(clean)}`);
    queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=2&n=50&q=${encodeURIComponent(clean + ' hits')}`);
  } else {
    queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=${page}&n=50&q=${encodeURIComponent(clean)}`);
    queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=${page}&n=50&q=${encodeURIComponent(clean + ' songs')}`);
  }

  try {
    const responses = await Promise.all(queries.map((u) => fetchUrl(u)));
    for (const data of responses) {
      if (!data || !Array.isArray(data.results)) continue;
      for (const song of data.results) {
        const encMedia = song.encrypted_media_url || (song.more_info && song.more_info.encrypted_media_url);
        const streamUrl = decryptSaavnUrl(encMedia, quality);
        if (!streamUrl) continue;

        const title = cleanHTML(song.song || song.title);
        // Strict spam and mashup filter
        if (/mashup|dj mix|remix by|ambient|calming cadence|lofi|karaoke|instrumental cover|meditation|lullaby/i.test(title)) {
          continue;
        }

        const creds = `${song.singers || ''} ${song.primary_artists || ''} ${song.more_info?.singers || ''} ${song.more_info?.music || ''}`.toLowerCase();
        
        // Strict artist credit check
        if (!isArtistCredMatch(creds, artistName)) {
          continue; // Skip tracks where the requested artist is not actually credited!
        }

        const artist = cleanHTML(song.singers || song.primary_artists || song.more_info?.singers || song.more_info?.music || clean);
        const movie = cleanHTML(song.album || song.more_info?.album || 'Single');
        const artwork = (song.image || '').replace('150x150.jpg', '500x500.jpg');
        const rawLang = song.language || (song.more_info && song.more_info.language) || 'Global';
        const cleanLang = rawLang.charAt(0).toUpperCase() + rawLang.slice(1).toLowerCase();

        const dedupKey = (title + '__' + movie).toLowerCase().replace(/[^a-z0-9]/g, '');
        if (dedupKey && !seenKeys.has(dedupKey)) {
          seenKeys.add(dedupKey);
          results.push({
            id: `saavn-${song.id || Math.random().toString(36).slice(2, 8)}`,
            title,
            artist,
            movie,
            year: song.year ? parseInt(song.year, 10) : new Date().getFullYear(),
            language: cleanLang,
            src: streamUrl,
            artwork: artwork,
            duration: parseInt(song.duration, 10) || 240,
            isOnline: true
          });
        }
      }
    }
  } catch (err) {}

  const payload = { success: true, page, total: results.length, results };
  if (results.length > 0) {
    discographyCache.set(cacheKey, payload);
  }

  if (res.status) return res.status(200).json(payload);
  res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
  return res.end(JSON.stringify(payload));
};
