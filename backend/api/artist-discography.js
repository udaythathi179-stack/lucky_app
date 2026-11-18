/**
 * Lifetime Artist Discography API Handler (backend/api/artist-discography.js)
 * Combines offline curated database with multi-vector live JioSaavn streaming search
 */

const db = require('../../database/db');
const { decryptSaavnUrl } = require('../utils/decrypt');
const { cleanHTML, fetchUrl } = require('../utils/helpers');

const discographyCache = new Map();

// Strict singer-only artist matchers to guarantee ONLY songs actually sung by that artist
const SPECIFIC_ARTIST_MATCHERS = {
  's. p. balasubrahmanyam': (t) => /balasubrahmanyam|balasubramanyam|balasubramaniam/i.test(t) || (/\bs\s*p\s*b\b|\bspb\b/i.test(t) && !/\bs\s*p\s*b\s*charan\b|\bspb\s*charan\b/i.test(t)),
  'sid sriram': (t) => /\bsid\s+sriram\b/i.test(t),
  'arijit singh': (t) => /\barijit\s+singh\b/i.test(t),
  'shreya ghoshal': (t) => /\bshreya\s+gh?oshal\b/i.test(t),
  'anurag kulkarni': (t) => /\banurag\s+kulkarni\b/i.test(t),
  'mangli': (t) => /\bmangli\b|\bsatyavathi\b/i.test(t),
  'sonu nigam': (t) => /\bsonu\s+nigam\b/i.test(t),
  'karthik': (t) => /\bkarthik\b/i.test(t.replace(/\bkarthik\s+raja\b/gi, '')) && !/\bkarthikeya\b/i.test(t),
  'k. s. chithra': (t) => /\bk\s*s\s*chith?ra\b|\bchithra\b|\bchitra\b/i.test(t),
  'kk': (t) => /(?:^|,|\s)k\s*k(?:$|,|\s)|\bkrishnakumar\s+kunnath\b/i.test(t),
  'devi sri prasad': (t) => /\bdevi\s+sri\s+prasad\b|\bdsp\b/i.test(t),
  'atif aslam': (t) => /\batif\s+aslam\b/i.test(t),
  'ram miriyala': (t) => /\bram\s+miriyala\b|\bmiriyala\b/i.test(t),
  'sunitha': (t) => /\bsunitha\b/i.test(t) && !/\bsunitha\s+sarathy\b/i.test(t),
  'jubin nautiyal': (t) => /\bjubin\s+nautiyal\b/i.test(t),
  'geetha madhuri': (t) => /\bgeetha\s+madhuri\b/i.test(t),
  'haricharan': (t) => /\bharicharan\b|\bhari\s+charan\b/i.test(t),
  'lata mangeshkar': (t) => /\blata\s+mangeshkar\b/i.test(t),
  'kishore kumar': (t) => /\bkishore\s+kumar\b/i.test(t),
  'armaan malik': (t) => /\barmaan\s+malik\b/i.test(t),
  'udit narayan': (t) => /\budit\s+narayan\b/i.test(t),
  'kumar sanu': (t) => /\bkumar\s+sanu\b/i.test(t),
  'alka yagnik': (t) => /\balka\s+yagnik\b/i.test(t),
  'mohammed rafi': (t) => /\b(?:mohammed|mohammad|mohd)\s+rafi\b/i.test(t),
  'mohit chauhan': (t) => /\bmohit\s+chauhan\b/i.test(t),
  'vishal mishra': (t) => /\bvishal\s+mishra\b/i.test(t),
  'shaan': (t) => /\bshaan\b/i.test(t),
  'shankar mahadevan': (t) => /\bshankar\s+mahadevan\b/i.test(t),
  'asha bhosle': (t) => /\basha\s+bhosle\b/i.test(t),
  'neha kakkar': (t) => /\bneha\s+kakkar\b/i.test(t),
  'mika singh': (t) => /\bmika\s+singh\b/i.test(t),
  'revanth': (t) => /\brevanth\b/i.test(t),
  'rahul sipligunj': (t) => /\brahul\s+sipligunj\b|\bsipligunj\b/i.test(t),
  'ramya behara': (t) => /\bramya\s+beh[ae]?ra\b/i.test(t),
  'vijay yesudas': (t) => /\bvijay\s+yesudas\b/i.test(t),
  'madhu priya': (t) => /\bmadhu\s+priya\b/i.test(t),
  'hemachandra': (t) => /\bhemachandra\b|\bhema\s+chandra\b/i.test(t),
  's. p. charan': (t) => /\bs\s*p\s*(?:b\s*)?charan\b|\bspb\s*charan\b/i.test(t),
  'saketh komanduri': (t) => /\bsaketh\s+komanduri\b|\bsaketh\b/i.test(t),
  'ed sheeran': (t) => /\bed\s+sheeran\b/i.test(t),
  'the weeknd': (t) => /\bthe\s+weeknd\b|\bweeknd\b/i.test(t),
  'imagine dragons': (t) => /\bimagine\s+dragons\b/i.test(t),
  'dua lipa': (t) => /\bdua\s+lipa\b/i.test(t),
  'justin bieber': (t) => /\bjustin\s+bieber\b/i.test(t),
  'taylor swift': (t) => /\btaylor\s+swift\b/i.test(t),
  'coldplay': (t) => /\bcoldplay\b/i.test(t),
  'queen': (t) => /(?:^|,|\s)queen(?:$|,|\s)|\bfreddie\s+mercury\b/i.test(t) && !/\bqueen\s+latifah\b/i.test(t),
  'michael jackson': (t) => /\bmichael\s+jackson\b/i.test(t),
  'anirudh ravichander': (t) => /\banirudh\s+ravichander\b|\banirudh\b/i.test(t),
  'santhosh narayanan': (t) => /\bsanthosh\s+narayanan\b/i.test(t),
  'ghantasala': (t) => /\bghantasala\b/i.test(t)
};

const NON_ORIGINAL_RE = /\b(mashup|dj\s*mix|remix|lofi|lo-fi|karaoke|instrumental|tribute|cover|recreated|slowed|reverb|reverbed|8d|ringtone|dialogue|teaser|trailer|jukebox|nonstop|non-stop|medley|bgm|ambient|lullaby|meditation|whistle\s+cover|bit\s+song|-bit)\b/i;

function isOriginalSong(title, movie = '') {
  return !NON_ORIGINAL_RE.test(title || '') && !NON_ORIGINAL_RE.test(movie || '');
}

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
      // Strictly ensure every track is an original song actually sung by the requested artist
      const validTracks = localTracks.filter(t => isArtistCredMatch(t.artist || '', artistName) && isOriginalSong(t.title, t.movie));
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
        const movie = cleanHTML(song.album || song.more_info?.album || 'Single');
        // Strict original song filter (reject remixes, covers, 8D, slowed/reverb, karaoke, teasers, BGM, mashups)
        if (!isOriginalSong(title, movie)) {
          continue;
        }

        // Check singer/primary artist credits ONLY (exclude composer-only `music` field)
        const creds = `${song.singers || ''} ${song.more_info?.singers || ''} ${song.primary_artists || ''}`.toLowerCase();
        
        // Strict artist credit check
        if (!isArtistCredMatch(creds, artistName)) {
          continue; // Skip tracks where the requested artist did not actually sing/perform!
        }

        const artist = cleanHTML(song.singers || song.more_info?.singers || song.primary_artists || clean);
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
