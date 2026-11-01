const http = require('http');
const https = require('https');
const crypto = require('crypto');
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

// Decrypt JioSaavn full audio stream URL
function decryptSaavnUrl(encrypted) {
  if (!encrypted) return '';
  try {
    const decipher = crypto.createDecipheriv('des-ecb', Buffer.from('38346591', 'utf8'), null);
    decipher.setAutoPadding(true);
    let dec = decipher.update(encrypted, 'base64', 'utf8');
    dec += decipher.final('utf8');
    return dec.replace(/_96\.mp4$/, '_320.mp4');
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
function searchFullSongs(query, res) {
  const url = `https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=1&n=40&q=${encodeURIComponent(query)}`;
  https.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  }, (apiRes) => {
    let data = '';
    apiRes.on('data', chunk => data += chunk);
    apiRes.on('end', () => {
      try {
        const json = JSON.parse(data);
        const results = (json && json.results ? json.results : []).map((song) => {
          const encMedia = song.encrypted_media_url || (song.more_info && song.more_info.encrypted_media_url);
          const streamUrl = decryptSaavnUrl(encMedia);
          const artwork = (song.image || '').replace('150x150.jpg', '500x500.jpg');
          const rawLang = song.language || (song.more_info && song.more_info.language) || 'Global';
          const cleanLang = rawLang.charAt(0).toUpperCase() + rawLang.slice(1).toLowerCase();
          return {
            id: `saavn-${song.id || Math.random().toString(36).slice(2, 8)}`,
            title: cleanHTML(song.song || song.title),
            artist: cleanHTML(song.singers || song.primary_artists || song.more_info?.singers || song.more_info?.music || 'Unknown'),
            movie: cleanHTML(song.album || song.more_info?.album || 'Single'),
            year: song.year ? parseInt(song.year, 10) : new Date().getFullYear(),
            language: cleanLang,
            src: streamUrl,
            artwork: artwork,
            duration: parseInt(song.duration, 10) || 240,
            isOnline: true
          };
        }).filter(s => Boolean(s.src));

        res.writeHead(200, {
          'Content-Type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({ success: true, results }));
      } catch (e) {
        res.writeHead(500, { 'Content-Type': 'application/json; charset=UTF-8' });
        res.end(JSON.stringify({ success: false, error: 'Parse error' }));
      }
    });
  }).on('error', (e) => {
    res.writeHead(502, { 'Content-Type': 'application/json; charset=UTF-8' });
    res.end(JSON.stringify({ success: false, error: e.message }));
  });
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // Scope Extensions origin association endpoint (for PWABuilder & W3C validation)
  if (pathname === '/.well-known/web-app-origin-association' || pathname === '/.well-known/web-app-origin-association.json') {
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers.host || 'localhost';
    const dynamicBase = `${protocol}://${host}`;
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify({
      "web_apps": [
        {
          "web_app_identity": "https://italiano-print-through-beverly.trycloudflare.com/?source=pwa"
        },
        {
          "web_app_identity": "https://italiano-print-through-beverly.trycloudflare.com/"
        },
        {
          "web_app_identity": `${dynamicBase}/?source=pwa`
        },
        {
          "web_app_identity": `${dynamicBase}/`
        }
      ]
    }));
    return;
  }

  // Search API route for full length songs
  if (pathname === '/api/search') {
    const q = parsedUrl.searchParams.get('q') || '';
    if (!q) {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
      res.end(JSON.stringify({ success: true, results: [] }));
      return;
    }
    searchFullSongs(q, res);
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

  if (!filePath.startsWith(ROOT)) {
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
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

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
        'Content-Type': contentType
      });
      file.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': stats.size,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes'
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
