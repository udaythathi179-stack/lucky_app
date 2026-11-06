const https = require('https');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

let CryptoJS;
try {
  CryptoJS = require('crypto-js');
} catch (e) {
  CryptoJS = null;
}

const discographyCache = new Map();
let localDiscographies = null;

function loadLocalDiscographies() {
  if (localDiscographies) return localDiscographies;
  try {
    const filePath = path.join(process.cwd(), 'data', 'artistDiscographies.json');
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf8');
      localDiscographies = JSON.parse(raw);
      return localDiscographies;
    }
  } catch (e) {}
  return {};
}

function decryptSaavnUrl(encrypted, quality = '320') {
  if (!encrypted) return '';
  const targetBitrate = quality === '96' ? '_96.mp4' : quality === '160' ? '_160.mp4' : '_320.mp4';
  if (CryptoJS) {
    try {
      const key = CryptoJS.enc.Utf8.parse('38346591');
      const decrypted = CryptoJS.DES.decrypt({ ciphertext: CryptoJS.enc.Base64.parse(encrypted) }, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
      const url = decrypted.toString(CryptoJS.enc.Utf8);
      if (url && url.startsWith('http')) {
        return url.replace(/_96\.mp4$/, targetBitrate);
      }
    } catch (e) {}
  }
  try {
    const decipher = crypto.createDecipheriv('des-ecb', Buffer.from('38346591', 'utf8'), null);
    decipher.setAutoPadding(true);
    let dec = decipher.update(encrypted, 'base64', 'utf8');
    dec += decipher.final('utf8');
    return dec.replace(/_96\.mp4$/, targetBitrate);
  } catch (e) {
    return '';
  }
}

function cleanHTML(str) {
  return (str || '')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&hellip;/g, '…')
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
    .trim();
}

function fetchUrl(targetUrl, timeoutMs = 4500) {
  return new Promise((resolve) => {
    const req = https.get(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (apiRes) => {
      let data = '';
      apiRes.on('data', chunk => data += chunk);
      apiRes.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { resolve(null); }
      });
    });
    req.on('error', () => resolve(null));
    req.setTimeout(timeoutMs, () => {
      req.destroy();
      resolve(null);
    });
  });
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const artistName = (req.query.name || req.query.q || '').trim();
  const page = parseInt(req.query.page || '1', 10);
  const quality = req.query.quality || '320';

  if (!artistName) {
    return res.status(200).json({ success: true, page: 1, total: 0, results: [] });
  }

  const clean = artistName.replace(/[\.\,\(\)]/g, ' ').replace(/\s+/g, ' ').trim();
  const cacheKey = `${clean.toLowerCase()}__p_${page}__q_${quality}`;

  if (discographyCache.has(cacheKey)) {
    return res.status(200).json(discographyCache.get(cacheKey));
  }

  // Gather offline/pre-cached lifetime discography songs if available
  const localCatalog = loadLocalDiscographies();
  let localTracks = [];
  if (page === 1) {
    if (localCatalog[artistName]) {
      localTracks = localCatalog[artistName];
    } else {
      const cLower = clean.toLowerCase();
      for (const [key, tracks] of Object.entries(localCatalog)) {
        const kLower = key.toLowerCase();
        if (kLower === cLower || kLower.includes(cLower) || cLower.includes(kLower)) {
          localTracks = tracks;
          break;
        }
      }
    }
  }

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

  const seenKeys = new Set();
  const results = [];

  // Add local discography tracks first
  if (Array.isArray(localTracks)) {
    for (const t of localTracks) {
      const key = ((t.title || '') + '__' + (t.movie || '')).toLowerCase().replace(/[^a-z0-9]/g, '');
      if (key && !seenKeys.has(key)) {
        seenKeys.add(key);
        results.push(t);
      }
    }
  }

  try {
    const responses = await Promise.all(queries.map(u => fetchUrl(u)));
    for (const data of responses) {
      if (!data || !Array.isArray(data.results)) continue;
      for (const song of data.results) {
        const encMedia = song.encrypted_media_url || (song.more_info && song.more_info.encrypted_media_url);
        const streamUrl = decryptSaavnUrl(encMedia, quality);
        if (!streamUrl) continue;

        const title = cleanHTML(song.song || song.title);
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

  return res.status(200).json(payload);
};

