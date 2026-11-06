const http = require('http');
const https = require('https');
const crypto = require('crypto');
let CryptoJS;
try {
  CryptoJS = require('crypto-js');
} catch (e) {
  CryptoJS = null;
}
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.m4a': 'audio/mp4',
  '.aac': 'audio/aac'
};

// Decrypt JioSaavn full audio stream URL with selectable quality
function decryptSaavnUrl(encrypted, quality = '96') {
  if (!encrypted) return '';
  const targetBitrate = quality === '320' ? '_320.mp4' : quality === '160' ? '_160.mp4' : '_96.mp4';
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

// Proxy Search for full-length songs (Universe of Music: English, Bollywood, Tollywood, Global)
function searchFullSongs(query, res, quality = '96') {
  const urls = [
    `https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=1&n=50&q=${encodeURIComponent(query)}`,
    `https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=2&n=50&q=${encodeURIComponent(query)}`
  ];

  function fetchUrl(targetUrl) {
    return new Promise((resolve) => {
      https.get(targetUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      }, (apiRes) => {
        let data = '';
        apiRes.on('data', chunk => data += chunk);
        apiRes.on('end', () => {
          try { resolve(JSON.parse(data)); } catch (e) { resolve(null); }
        });
      }).on('error', () => resolve(null));
    });
  }

  Promise.all(urls.map(u => fetchUrl(u))).then((responses) => {
    const seenKeys = new Set();
    const results = [];

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

    res.writeHead(200, {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify({ success: true, results }));
  }).catch((err) => {
    res.writeHead(500, { 'Content-Type': 'application/json; charset=UTF-8' });
    res.end(JSON.stringify({ success: false, error: err.message, results: [] }));
  });
}

// In-memory cache for lightning-fast sub-millisecond artist discography responses
const artistDiscographyCache = new Map();

// High-Speed Lifetime Artist Discography Aggregator
function fetchArtistDiscography(artistName, page, quality, res) {
  const clean = (artistName || '').replace(/[\.\,\(\)]/g, ' ').replace(/\s+/g, ' ').trim();
  const cacheKey = `${clean.toLowerCase()}__p_${page}__q_${quality}`;

  if (artistDiscographyCache.has(cacheKey)) {
    const cached = artistDiscographyCache.get(cacheKey);
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify(cached));
    return;
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

  Promise.all(queries.map(u => fetchUrl(u))).then((responses) => {
    const seenTitles = new Set();
    const results = [];

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

        // Dedup by normalized title + movie
        const dedupKey = (title + '__' + movie).toLowerCase().replace(/[^a-z0-9]/g, '');
        if (dedupKey && !seenTitles.has(dedupKey)) {
          seenTitles.add(dedupKey);
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

    const payload = { success: true, page, total: results.length, results };
    if (results.length > 0) {
      artistDiscographyCache.set(cacheKey, payload);
    }

    res.writeHead(200, {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify(payload));
  }).catch((err) => {
    res.writeHead(500, { 'Content-Type': 'application/json; charset=UTF-8' });
    res.end(JSON.stringify({ success: false, error: err.message }));
  });
}

// --- User Database Management (Persistent JSON Database) ---
const USERS_DB_PATH = path.join(ROOT, 'data', 'users.json');

function ensureDB() {
  const dataDir = path.join(ROOT, 'data');
  if (!fs.existsSync(dataDir)) {
    try { fs.mkdirSync(dataDir, { recursive: true }); } catch (e) {}
  }
  if (!fs.existsSync(USERS_DB_PATH)) {
    try { fs.writeFileSync(USERS_DB_PATH, JSON.stringify([], null, 2), 'utf8'); } catch (e) {}
  }
}

function getUsersFromDB() {
  ensureDB();
  try {
    const raw = fs.readFileSync(USERS_DB_PATH, 'utf8');
    return JSON.parse(raw) || [];
  } catch (e) {
    return [];
  }
}

function saveUserToDB(name, email, avatar = '') {
  ensureDB();
  const users = getUsersFromDB();
  const cleanEmail = (email || '').toLowerCase().trim();
  const cleanName = (name || '').trim();
  if (!cleanEmail || !cleanName) return null;

  let user = users.find(u => u.email === cleanEmail);
  const now = new Date().toISOString();

  if (user) {
    user.name = cleanName;
    user.lastLoginAt = now;
    user.loginCount = (user.loginCount || 1) + 1;
    if (avatar) user.avatar = avatar;
  } else {
    user = {
      id: 'usr_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      name: cleanName,
      email: cleanEmail,
      avatar: avatar || '',
      provider: cleanEmail.endsWith('@gmail.com') ? 'google' : 'email',
      createdAt: now,
      lastLoginAt: now,
      loginCount: 1
    };
    users.push(user);
  }

  try {
    fs.writeFileSync(USERS_DB_PATH, JSON.stringify(users, null, 2), 'utf8');
  } catch (e) {
    console.error('Error writing to users DB:', e.message);
  }
  return user;
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // --- Auth API Endpoints (Saved in Database) ---
  if (pathname === '/api/auth/login' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 1e6) req.destroy();
    });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body || '{}');
        const user = saveUserToDB(payload.name, payload.email, payload.avatar);
        if (!user) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=UTF-8' });
          res.end(JSON.stringify({ success: false, error: 'Name and valid email required' }));
          return;
        }
        res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
        res.end(JSON.stringify({ success: true, user }));
      } catch (e) {
        console.error('Login error:', e.message, 'body:', body);
        res.writeHead(500, { 'Content-Type': 'application/json; charset=UTF-8' });
        res.end(JSON.stringify({ success: false, error: e.message }));
      }
    });
    return;
  }

  if (pathname === '/api/auth/me' && req.method === 'GET') {
    const email = (parsedUrl.searchParams.get('email') || '').toLowerCase().trim();
    if (!email) {
      res.writeHead(400, { 'Content-Type': 'application/json; charset=UTF-8' });
      res.end(JSON.stringify({ success: false, error: 'Email parameter required' }));
      return;
    }
    const users = getUsersFromDB();
    const user = users.find(u => u.email === email);
    res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
    res.end(JSON.stringify({ success: true, user: user || null }));
    return;
  }

  if (pathname === '/api/auth/users' && req.method === 'GET') {
    const users = getUsersFromDB().map(u => ({
      id: u.id,
      name: u.name,
      email: u.email,
      provider: u.provider,
      createdAt: u.createdAt,
      lastLoginAt: u.lastLoginAt,
      loginCount: u.loginCount
    }));
    res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
    res.end(JSON.stringify({ success: true, total: users.length, users }));
    return;
  }

  // Lifetime Artist Discography route
  if (pathname === '/api/artist-discography') {
    const name = parsedUrl.searchParams.get('name') || '';
    const page = parseInt(parsedUrl.searchParams.get('page') || '1', 10);
    const quality = parsedUrl.searchParams.get('quality') || '320';
    if (!name) {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
      res.end(JSON.stringify({ success: true, page: 1, total: 0, results: [] }));
      return;
    }
    fetchArtistDiscography(name, page, quality, res);
    return;
  }

  // Search API route for full length songs
  if (pathname === '/api/search') {
    const q = parsedUrl.searchParams.get('q') || '';
    const quality = parsedUrl.searchParams.get('quality') || '96';
    if (!q) {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
      res.end(JSON.stringify({ success: true, results: [] }));
      return;
    }
    searchFullSongs(q, res, quality);
    return;
  }

  // High-performance streaming audio proxy with Range support for mobile & desktop
  if (pathname === '/api/stream') {
    const fileUrl = parsedUrl.searchParams.get('url');
    if (!fileUrl) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Missing url parameter');
      return;
    }

    function proxyStream(targetUrl, redirectCount = 0) {
      if (redirectCount > 4) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Too many redirects');
        return;
      }
      try {
        const client = targetUrl.startsWith('https') ? https : http;
        const reqHeaders = {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': '*/*'
        };
        if (req.headers.range) {
          reqHeaders['Range'] = req.headers.range;
        }

        client.get(targetUrl, { headers: reqHeaders }, (mediaRes) => {
          if (mediaRes.statusCode >= 300 && mediaRes.statusCode < 400 && mediaRes.headers.location) {
            const redirectUrl = new URL(mediaRes.headers.location, targetUrl).href;
            proxyStream(redirectUrl, redirectCount + 1);
            return;
          }

          const resHeaders = {
            'Content-Type': mediaRes.headers['content-type'] || 'audio/mp4',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Range, Content-Type',
            'Accept-Ranges': 'bytes',
            'Cache-Control': 'public, max-age=86400'
          };
          if (mediaRes.headers['content-range']) {
            resHeaders['Content-Range'] = mediaRes.headers['content-range'];
          }
          if (mediaRes.headers['content-length']) {
            resHeaders['Content-Length'] = mediaRes.headers['content-length'];
          }

          res.writeHead(mediaRes.statusCode || 200, resHeaders);
          mediaRes.pipe(res);
        }).on('error', (err) => {
          if (!res.headersSent) {
            res.writeHead(502, { 'Content-Type': 'text/plain' });
            res.end('Stream error: ' + err.message);
          }
        });
      } catch (err) {
        if (!res.headersSent) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Stream error: ' + err.message);
        }
      }
    }

    proxyStream(fileUrl);
    return;
  }

  // Direct Audio Download Proxy route (Forces file save on Mobile & Laptop)
  if (pathname === '/api/download') {
    const fileUrl = parsedUrl.searchParams.get('url');
    let rawName = parsedUrl.searchParams.get('name') || 'Tuneus_Song';
    let cleanName = rawName.replace(/[/\\?%*:|"<>]/g, '_').trim();
    if (!cleanName.toLowerCase().endsWith('.mp3') && !cleanName.toLowerCase().endsWith('.m4a')) {
      cleanName += '.mp3';
    }

    if (!fileUrl) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Missing url');
      return;
    }

    function streamMedia(targetUrl, redirectCount = 0) {
      if (redirectCount > 4) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Too many redirects');
        return;
      }
      try {
        const client = targetUrl.startsWith('https') ? https : http;
        client.get(targetUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        }, (mediaRes) => {
          if (mediaRes.statusCode >= 300 && mediaRes.statusCode < 400 && mediaRes.headers.location) {
            const redirectUrl = new URL(mediaRes.headers.location, targetUrl).href;
            streamMedia(redirectUrl, redirectCount + 1);
            return;
          }

          const safeFilename = cleanName.replace(/["\r\n]/g, '');
          const headers = {
            'Content-Type': mediaRes.headers['content-type'] || 'audio/mpeg',
            'Content-Disposition': `attachment; filename="${safeFilename}"; filename*=UTF-8''${encodeURIComponent(safeFilename)}`,
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache'
          };
          if (mediaRes.headers['content-length']) {
            headers['Content-Length'] = mediaRes.headers['content-length'];
          }

          res.writeHead(200, headers);
          mediaRes.pipe(res);
        }).on('error', (err) => {
          if (!res.headersSent) {
            res.writeHead(502, { 'Content-Type': 'text/plain' });
            res.end('Download error: ' + err.message);
          }
        });
      } catch (err) {
        if (!res.headersSent) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error: ' + err.message);
        }
      }
    }

    streamMedia(fileUrl);
    return;
  }

  let reqPath = decodeURI(pathname);
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  const filePath = path.normalize(path.join(ROOT, reqPath));
  const normFilePath = path.resolve(filePath).toLowerCase();
  const normRoot = path.resolve(ROOT).toLowerCase();

  if (!normFilePath.startsWith(normRoot)) {
    res.writeHead(403);
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    let contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const extraHeaders = {
      'Access-Control-Allow-Origin': '*'
    };

    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.webp' || ext === '.svg' || ext === '.ico') {
      extraHeaders['Cache-Control'] = 'public, max-age=604800, immutable';
    } else if (pathname === '/manifest.json') {
      contentType = 'application/manifest+json; charset=UTF-8';
    } else if (pathname === '/sw.js') {
      contentType = 'application/javascript; charset=UTF-8';
      extraHeaders['Service-Worker-Allowed'] = '/';
      extraHeaders['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    }

    // Support audio Range requests
    const range = req.headers.range;
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
      const chunkSize = (end - start) + 1;
      const file = fs.createReadStream(filePath, { start, end });

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stats.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType,
        ...extraHeaders
      });
      file.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': stats.size,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        ...extraHeaders
      });
      fs.createReadStream(filePath).pipe(res);
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Tuneus Music Player server is running:`);
  console.log(`  Local:   http://localhost:${PORT}`);
  console.log(`  Network: http://192.168.0.111:${PORT}`);
});
