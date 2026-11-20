/**
 * Streaming proxy with HTTP Range request support (backend/api/stream.js)
 * High-speed media relay for cross-origin audio streaming
 */

const http = require('http');
const https = require('https');

module.exports = function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Range, Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status ? res.status(204).end() : (res.writeHead(204), res.end());
  }

  const parsedUrl = new URL(req.url, `http://${req.headers?.host || 'localhost'}`);
  const fileUrl = req.query?.url || parsedUrl.searchParams.get('url');

  if (!fileUrl) {
    if (res.status) return res.status(400).send('Missing url parameter');
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=UTF-8' });
    return res.end('Missing url parameter');
  }

  function proxyStream(targetUrl, redirectCount = 0) {
    if (redirectCount > 4) {
      if (res.status) return res.status(500).send('Too many redirects');
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
          if (res.status) return res.status(502).send('Stream error: ' + err.message);
          res.writeHead(502, { 'Content-Type': 'text/plain; charset=UTF-8' });
          res.end('Stream error: ' + err.message);
        }
      });
    } catch (err) {
      if (!res.headersSent) {
        if (res.status) return res.status(500).send('Stream error: ' + err.message);
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('Stream error: ' + err.message);
      }
    }
  }

  proxyStream(fileUrl);
};
