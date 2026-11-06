/**
 * User Authentication API Handler (backend/api/auth.js)
 * Integrates with database/db.js for persistent user profiles and session management
 */

const db = require('../../database/db');

module.exports = async function handler(req, res) {
  // Common CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    if (res.status) return res.status(200).end();
    res.writeHead(200);
    return res.end();
  }

  const parsedUrl = req.url ? new URL(req.url, 'http://localhost') : null;
  const pathname = parsedUrl ? parsedUrl.pathname : '';
  const action = req.query?.action || parsedUrl?.searchParams.get('action') || '';

  // Helper to send JSON response
  function sendJson(statusCode, data) {
    if (res.status && typeof res.json === 'function') {
      return res.status(statusCode).json(data);
    }
    res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=UTF-8' });
    return res.end(JSON.stringify(data));
  }

  // 1. GET /api/auth/users or action=users: return all active user profiles
  if (pathname.endsWith('/users') || action === 'users') {
    const users = db.getUsers().map(u => ({
      id: u.id,
      name: u.name,
      email: u.email,
      avatar: u.avatar,
      provider: u.provider,
      createdAt: u.createdAt,
      lastLoginAt: u.lastLoginAt,
      loginCount: u.loginCount
    }));
    return sendJson(200, { success: true, total: users.length, users });
  }

  // 2. GET /api/auth/me or action=me: return user profile by email
  if (pathname.endsWith('/me') || action === 'me' || (req.method === 'GET' && (req.query?.email || parsedUrl?.searchParams.get('email')))) {
    const email = (req.query?.email || parsedUrl?.searchParams.get('email') || '').toLowerCase().trim();
    if (!email) {
      return sendJson(400, { success: false, error: 'Email parameter required' });
    }
    const user = db.getUserByEmail(email);
    return sendJson(200, { success: true, user: user || null });
  }

  // 3. POST /api/auth/login or POST /api/auth: save/update user in database
  if (req.method === 'POST') {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        body = {};
      }
    }

    // In raw Node HTTP without body parser, read the stream
    if (!body && typeof req.on === 'function') {
      body = await new Promise((resolve) => {
        let raw = '';
        req.on('data', chunk => {
          raw += chunk;
          if (raw.length > 1e6) req.destroy();
        });
        req.on('end', () => {
          try { resolve(JSON.parse(raw || '{}')); } catch (e) { resolve({}); }
        });
        req.on('error', () => resolve({}));
      });
    }

    body = body || {};
    const name = (body.name || req.query?.name || parsedUrl?.searchParams.get('name') || '').trim();
    const email = (body.email || req.query?.email || parsedUrl?.searchParams.get('email') || '').toLowerCase().trim();
    const avatar = body.avatar || '';

    if (!name || !email) {
      return sendJson(400, { success: false, error: 'Name and valid email are required' });
    }

    try {
      const user = db.saveUser({
        name,
        email,
        avatar,
        provider: email.endsWith('@gmail.com') ? 'google' : (body.provider || 'email')
      });
      return sendJson(200, { success: true, user });
    } catch (err) {
      return sendJson(500, { success: false, error: err.message });
    }
  }

  // Default handler
  return sendJson(200, {
    success: true,
    message: 'Tuneus Authentication API is operational',
    endpoints: {
      login: 'POST /api/auth/login',
      me: 'GET /api/auth/me?email=<user@example.com>',
      users: 'GET /api/auth/users'
    }
  });
};

