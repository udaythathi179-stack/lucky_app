/**
 * Tuneus Modular Backend Server (backend/server.js)
 * High-performance 3-tier architecture:
 *   - Tier 1: Frontend Static Delivery (../frontend)
 *   - Tier 2: Backend API Services & Streaming Engine (./api, ./utils)
 *   - Tier 3: Database & Storage Engine (../database)
 */

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Database & API Handlers
const db = require('../database/db');
const searchHandler = require('./api/search');
const discographyHandler = require('./api/artist-discography');
const authHandler = require('./api/auth');

const PORT = process.env.PORT || 3000;
const FRONTEND_DIR = path.resolve(__dirname, '..', 'frontend');
const ROOT_DIR = path.resolve(__dirname, '..');

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.m4a': 'audio/mp4',
  '.aac': 'audio/aac',
  '.webmanifest': 'application/manifest+json; charset=UTF-8'
};

// Streaming proxy with HTTP Range request support
function handleStreamProxy(req, res, parsedUrl) {
  const fileUrl = parsedUrl.searchParams.get('url');
  if (!fileUrl) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=UTF-8' });
    return res.end('Missing url parameter');
  }

  function proxyStream(targetUrl, redirectCount = 0) {
    if (redirectCount > 4) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
      return res.end('Too many redirects');
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
          return proxyStream(redirectUrl, redirectCount + 1);
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
          res.writeHead(502, { 'Content-Type': 'text/plain; charset=UTF-8' });
          res.end('Stream error: ' + err.message);
        }
      });
    } catch (err) {
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('Stream error: ' + err.message);
      }
    }
  }

  proxyStream(fileUrl);
}

// Direct Audio Download Proxy (Forces instant download file save)
function handleDownloadProxy(req, res, parsedUrl) {
  const fileUrl = parsedUrl.searchParams.get('url');
  let rawName = parsedUrl.searchParams.get('name') || 'Tuneus_Song';
  let cleanName = rawName.replace(/[/\\?%*:|"<>]/g, '_').trim();
  if (!cleanName.toLowerCase().endsWith('.mp3') && !cleanName.toLowerCase().endsWith('.m4a')) {
    cleanName += '.mp3';
  }

  if (!fileUrl) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=UTF-8' });
    return res.end('Missing url parameter');
  }

  function streamMedia(targetUrl, redirectCount = 0) {
    if (redirectCount > 4) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
      return res.end('Too many redirects');
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
          return streamMedia(redirectUrl, redirectCount + 1);
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
          res.writeHead(502, { 'Content-Type': 'text/plain; charset=UTF-8' });
          res.end('Download error: ' + err.message);
        }
      });
    } catch (err) {
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('Error: ' + err.message);
      }
    }
  }

  streamMedia(fileUrl);
}

// Create unified server
const server = http.createServer(async (req, res) => {
  // Global CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Range');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // --- Tier 2: Backend API Endpoints ---
  if (pathname.startsWith('/api/auth')) {
    return authHandler(req, res);
  }

  if (pathname === '/api/artist-discography') {
    return discographyHandler(req, res);
  }

  if (pathname === '/api/search') {
    return searchHandler(req, res);
  }

  if (pathname === '/api/stream') {
    return handleStreamProxy(req, res, parsedUrl);
  }

  if (pathname === '/api/download') {
    return handleDownloadProxy(req, res, parsedUrl);
  }

  if (pathname === '/api/stats') {
    const stats = db.getStats();
    res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
    return res.end(JSON.stringify({ success: true, ...stats }));
  }

  // --- Tier 1: Frontend Static File Serving ---
  let reqPath = decodeURI(pathname);
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  // Primary search in FRONTEND_DIR, fallback to ROOT_DIR
  let filePath = path.normalize(path.join(FRONTEND_DIR, reqPath));
  if (!fs.existsSync(filePath)) {
    filePath = path.normalize(path.join(ROOT_DIR, reqPath));
  }

  const normFilePath = path.resolve(filePath).toLowerCase();
  const normFrontend = FRONTEND_DIR.toLowerCase();
  const normRoot = ROOT_DIR.toLowerCase();

  // Directory traversal check
  if (!normFilePath.startsWith(normFrontend) && !normFilePath.startsWith(normRoot)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=UTF-8' });
    return res.end('403 Forbidden');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
      return res.end('404 Not Found');
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
      const fileStream = fs.createReadStream(filePath, { start, end });

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stats.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType,
        ...extraHeaders
      });
      fileStream.pipe(res);
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

if (require.main === module) {
  server.listen(PORT, '0.0.0.0', () => {
    console.log(`=================================================`);
    console.log(` Tuneus Music App - 3-Tier Architecture Loaded   `);
    console.log(` Tier 1 [Frontend]: ${FRONTEND_DIR}`);
    console.log(` Tier 2 [Backend ]: ${__dirname}`);
    console.log(` Tier 3 [Database]: ${path.resolve(__dirname, '..', 'database')}`);
    console.log(` Server running at http://localhost:${PORT}`);
    console.log(`=================================================`);
  });
}

module.exports = server;
