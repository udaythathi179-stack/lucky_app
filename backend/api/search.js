/**
 * Full Song Search API Handler (backend/api/search.js)
 * High-performance cached live JioSaavn search engine for 100k concurrency
 */

const db = require('../../database/db');
const { decryptSaavnUrl } = require('../utils/decrypt');
const { cleanHTML, fetchUrl } = require('../utils/helpers');

// In-memory LRU search cache (sub-millisecond repeat queries)
const SEARCH_CACHE = new Map();
const MAX_CACHE_SIZE = 1500;
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status ? res.status(200).end() : (res.writeHead(200), res.end());
  }

  const query = (req.query?.q || (req.url && new URL(req.url, 'http://localhost').searchParams.get('q')) || '').trim();
  const quality = (req.query?.quality || (req.url && new URL(req.url, 'http://localhost').searchParams.get('quality')) || '320');

  if (!query) {
    const emptyPayload = { success: true, results: [] };
    if (res.status) return res.status(200).json(emptyPayload);
    res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
    return res.end(JSON.stringify(emptyPayload));
  }

  const cacheKey = `${query.toLowerCase()}__q_${quality}`;
  const now = Date.now();

  // Check in-memory cache
  if (SEARCH_CACHE.has(cacheKey)) {
    const item = SEARCH_CACHE.get(cacheKey);
    if (now - item.timestamp < CACHE_TTL_MS) {
      res.setHeader('Cache-Control', 'public, max-age=1800');
      if (res.status) return res.status(200).json(item.payload);
      res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8', 'Cache-Control': 'public, max-age=1800' });
      return res.end(JSON.stringify(item.payload));
    }
  }

  // Pre-seed with instant local database matches
  const localMatches = db.searchTracks(query, 25);
  const seenKeys = new Set();
  const results = [];

  for (const t of localMatches) {
    const key = ((t.title || '') + '__' + (t.movie || '')).toLowerCase().replace(/[^a-z0-9]/g, '');
    if (key && !seenKeys.has(key)) {
      seenKeys.add(key);
      results.push(t);
    }
  }

  const urls = [
    `https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=1&n=40&q=${encodeURIComponent(query)}`,
    `https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=2&n=40&q=${encodeURIComponent(query)}`
  ];

  try {
    const responses = await Promise.all(urls.map((u) => fetchUrl(u)));

    for (const json of responses) {
      if (!json || !Array.isArray(json.results)) continue;
      for (const song of json.results) {
        const encMedia = song.encrypted_media_url || (song.more_info && song.more_info.encrypted_media_url);
        const streamUrl = decryptSaavnUrl(encMedia, quality);
        if (!streamUrl) continue;

        const artwork = (song.image || '').replace('150x150.jpg', '500x500.jpg');
        const rawLang = song.language || (song.more_info && song.more_info.language) || 'Global';
        const cleanLang = rawLang.charAt(0).toUpperCase() + rawLang.slice(1).toLowerCase();

        const title = cleanHTML(song.song || song.title);
        const artist = cleanHTML(song.singers || song.primary_artists || song.more_info?.singers || song.more_info?.music || 'Unknown');
        const movie = cleanHTML(song.album || song.more_info?.album || 'Single');

        const cleanTitle = title
          .toLowerCase()
          .replace(/\s*\(.*?\)/g, '')
          .replace(/\s*\[.*?\]/g, '')
          .replace(/\s*-\s*(from|lyrical|remix|full video|audio|remastered|video song|single|original).*$/i, '')
          .replace(/[^a-z0-9]/g, '')
          .trim();
        const key = `${cleanTitle}__${movie.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
        if (cleanTitle && !seenKeys.has(key)) {
          seenKeys.add(key);
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

    const payload = { success: true, results };

    // Cache the result in memory (LRU eviction)
    if (SEARCH_CACHE.size >= MAX_CACHE_SIZE) {
      const oldestKey = SEARCH_CACHE.keys().next().value;
      SEARCH_CACHE.delete(oldestKey);
    }
    SEARCH_CACHE.set(cacheKey, { timestamp: now, payload });

    res.setHeader('Cache-Control', 'public, max-age=1800');
    if (res.status) return res.status(200).json(payload);
    res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8', 'Cache-Control': 'public, max-age=1800' });
    return res.end(JSON.stringify(payload));
  } catch (err) {
    // If external API fails, still return local database matches!
    const fallbackPayload = { success: true, results, fromLocalFallback: true };
    if (res.status) return res.status(200).json(fallbackPayload);
    res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
    return res.end(JSON.stringify(fallbackPayload));
  }
};

