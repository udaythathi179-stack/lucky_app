/**
 * Lifetime Artist Discography API Handler (backend/api/artist-discography.js)
 * Combines offline curated database with multi-vector live JioSaavn streaming search
 */

const db = require('../../database/db');
const { decryptSaavnUrl } = require('../utils/decrypt');
const { cleanHTML, fetchUrl } = require('../utils/helpers');

const discographyCache = new Map();

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
    if (res.status) return res.status(200).json(cached);
    res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
    return res.end(JSON.stringify(cached));
  }

  // Pre-load from database on page 1
  const seenKeys = new Set();
  const results = [];

  if (page === 1) {
    const localTracks = db.getArtistTracks(artistName);
    if (Array.isArray(localTracks)) {
      for (const t of localTracks) {
        const key = ((t.title || '') + '__' + (t.movie || '')).toLowerCase().replace(/[^a-z0-9]/g, '');
        if (key && !seenKeys.has(key)) {
          seenKeys.add(key);
          results.push(t);
        }
      }
    }
  }

  // Build high-coverage multi-query search vectors
  const queries = [];
  const isGlobal = /taylor|sheeran|bieber|jackson|weeknd|eminem|gomez|grande|adele|coldplay|drake|rihanna|beyonce|perry/i.test(clean);

  if (page === 1) {
    queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=1&n=50&q=${encodeURIComponent(clean)}`);
    queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=2&n=50&q=${encodeURIComponent(clean)}`);
    queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=1&n=50&q=${encodeURIComponent(clean + ' hits')}`);
    queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=2&n=50&q=${encodeURIComponent(clean + ' hits')}`);
    if (isGlobal) {
      queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=1&n=50&q=${encodeURIComponent(clean + ' songs')}`);
      queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=2&n=50&q=${encodeURIComponent(clean + ' songs')}`);
      queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=3&n=50&q=${encodeURIComponent(clean)}`);
    } else {
      queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=1&n=50&q=${encodeURIComponent(clean + ' Telugu')}`);
      queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=2&n=50&q=${encodeURIComponent(clean + ' Telugu')}`);
      queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=1&n=50&q=${encodeURIComponent(clean + ' Hindi')}`);
      queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=1&n=50&q=${encodeURIComponent(clean + ' Tamil')}`);
      queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=1&n=50&q=${encodeURIComponent(clean + ' melody')}`);
      queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=1&n=50&q=${encodeURIComponent(clean + ' classics')}`);
    }
  } else if (page === 2) {
    queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=3&n=50&q=${encodeURIComponent(clean)}`);
    queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=4&n=50&q=${encodeURIComponent(clean)}`);
    queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=3&n=50&q=${encodeURIComponent(clean + ' hits')}`);
    queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=2&n=50&q=${encodeURIComponent(clean + ' songs')}`);
    queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=1&n=50&q=${encodeURIComponent(clean + ' duets')}`);
    queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=1&n=50&q=${encodeURIComponent(clean + ' romantic')}`);
  } else {
    queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=${page * 2}&n=50&q=${encodeURIComponent(clean)}`);
    queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=${page * 2 + 1}&n=50&q=${encodeURIComponent(clean)}`);
    queries.push(`https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=${page}&n=50&q=${encodeURIComponent(clean + ' hits')}`);
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
        const artistParts = clean.toLowerCase().split(/\s+/).filter((p) => p.length > 2);
        const matchesArtistCred = artistParts.length > 0 && artistParts.some((p) => creds.includes(p));
        if (!matchesArtistCred) {
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

