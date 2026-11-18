/**
 * Tuneus Enterprise Authentication API Handler (backend/api/auth.js)
 * Implements Google Identity Services (Sign in with Google), OpenID Connect token verification,
 * RFC 7519 JWT session tokens, refresh tokens, and database user profiles
 */

const db = require('../../database/db');
const {
  generateAccessToken,
  verifyAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
  verifyGoogleIdToken,
  ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_EXPIRY_DAYS
} = require('../utils/auth-jwt');

const DEFAULT_GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';

module.exports = async function handler(req, res) {
  // CORS & Security headers
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

  function sendJson(statusCode, data) {
    if (res.status && typeof res.json === 'function') {
      return res.status(statusCode).json(data);
    }
    res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=UTF-8' });
    return res.end(JSON.stringify(data));
  }

  // Helper to parse POST body stream
  async function parseBody() {
    if (req.body && typeof req.body === 'object') return req.body;
    if (typeof req.body === 'string') {
      try { return JSON.parse(req.body); } catch (_) { return {}; }
    }
    if (typeof req.on === 'function') {
      return new Promise((resolve) => {
        let raw = '';
        req.on('data', chunk => {
          raw += chunk;
          if (raw.length > 2e6) req.destroy();
        });
        req.on('end', () => {
          try { resolve(JSON.parse(raw || '{}')); } catch (_) { resolve({}); }
        });
        req.on('error', () => resolve({}));
      });
    }
    return {};
  }

  // --- 1. GET /api/auth/config: Return public client configuration ---
  if (pathname.endsWith('/config') || action === 'config') {
    return sendJson(200, {
      success: true,
      googleClientId: DEFAULT_GOOGLE_CLIENT_ID,
      authProviders: ['google', 'email'],
      tokenExpirySeconds: ACCESS_TOKEN_EXPIRY
    });
  }

  // --- 2. POST /api/auth/google: Google Identity Services ID Token Verification ---
  if (req.method === 'POST' && (pathname.endsWith('/google') || action === 'google')) {
    const body = await parseBody();
    const idToken = body.idToken || body.credential || body.token || '';
    const clientId = body.clientId || DEFAULT_GOOGLE_CLIENT_ID;

    if (!idToken) {
      return sendJson(400, {
        success: false,
        error: 'Google ID token (credential) is required'
      });
    }

    try {
      // Cryptographically verify token signature, issuer, audience and exp
      const googleProfile = await verifyGoogleIdToken(idToken, clientId);

      // Upsert user in database
      const user = db.saveUser({
        name: googleProfile.name,
        email: googleProfile.email,
        avatar: googleProfile.picture || 'images/avatar-uday.jpg',
        provider: 'google',
        googleSub: googleProfile.sub
      });

      // Generate Application JWT Access Token & Refresh Token
      const tokenData = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);

      // Persist session in database
      const now = Date.now();
      db.saveSession({
        userId: user.id,
        refreshToken,
        userAgent: req.headers['user-agent'] || '',
        ip: req.socket?.remoteAddress || '',
        expiresAt: now + (REFRESH_TOKEN_EXPIRY_DAYS * 24 * 60 * 60 * 1000)
      });

      return sendJson(200, {
        success: true,
        message: 'Google authentication successful',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          provider: 'google',
          createdAt: user.createdAt,
          lastLoginAt: user.lastLoginAt
        },
        accessToken: tokenData.accessToken,
        refreshToken,
        expiresIn: tokenData.expiresIn,
        tokenType: 'Bearer'
      });
    } catch (err) {
      console.error('[Auth Error] Google token verification failed:', err.message);
      return sendJson(401, {
        success: false,
        error: `Google verification failed: ${err.message}`
      });
    }
  }

  // --- 3. POST /api/auth/refresh: Exchange refresh token for fresh JWT ---
  if (req.method === 'POST' && (pathname.endsWith('/refresh') || action === 'refresh')) {
    const body = await parseBody();
    const refreshToken = body.refreshToken || '';

    if (!refreshToken) {
      return sendJson(400, { success: false, error: 'refreshToken is required' });
    }

    let user = null;
    const session = db.getSession(refreshToken);
    if (session) {
      user = db.getUserById(session.userId);
    }

    // Stateless fallback for Vercel serverless cold starts where disk DB resets
    if (!user) {
      const verified = verifyRefreshToken(refreshToken);
      if (verified && verified.email) {
        user = db.getUserByEmail(verified.email) || {
          id: verified.sub,
          name: verified.name,
          email: verified.email,
          avatar: verified.avatar,
          provider: verified.provider || 'google'
        };
      }
    }

    if (!user) {
      return sendJson(401, { success: false, error: 'Invalid or expired refresh token' });
    }

    const tokenData = generateAccessToken(user);
    return sendJson(200, {
      success: true,
      user,
      accessToken: tokenData.accessToken,
      expiresIn: tokenData.expiresIn,
      tokenType: 'Bearer'
    });
  }

  // --- 4. POST /api/auth/logout: Revoke session and refresh token ---
  if (req.method === 'POST' && (pathname.endsWith('/logout') || action === 'logout')) {
    const body = await parseBody();
    const refreshToken = body.refreshToken || '';
    if (refreshToken) {
      db.deleteSession(refreshToken);
    }
    return sendJson(200, { success: true, message: 'Logged out successfully' });
  }

  // --- 5. GET /api/auth/me: Retrieve current authenticated profile ---
  if (req.method === 'GET' && (pathname.endsWith('/me') || action === 'me')) {
    const authHeader = req.headers['authorization'] || '';
    if (authHeader.startsWith('Bearer ')) {
      const token = authHeader.slice(7).trim();
      const payload = verifyAccessToken(token);
      if (payload && payload.sub) {
        const user = db.getUserById(payload.sub) || {
          id: payload.sub,
          name: payload.name,
          email: payload.email,
          avatar: payload.avatar,
          provider: payload.provider || 'google'
        };
        if (user) {
          return sendJson(200, { success: true, user });
        }
      }
    }

    const email = (req.query?.email || parsedUrl?.searchParams.get('email') || '').toLowerCase().trim();
    if (email) {
      const user = db.getUserByEmail(email);
      return sendJson(200, { success: true, user: user || null });
    }

    return sendJson(401, { success: false, error: 'Authorization header or email required' });
  }

  // --- 6. GET /api/auth/users: Return all registered users ---
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

  // --- 7. POST /api/auth/login or POST /api/auth (Standard Email / Name authentication) ---
  if (req.method === 'POST') {
    const body = await parseBody();
    const name = (body.name || req.query?.name || parsedUrl?.searchParams.get('name') || '').trim();
    const email = (body.email || req.query?.email || parsedUrl?.searchParams.get('email') || '').toLowerCase().trim();
    const avatar = body.avatar || '';

    if (!name || !email) {
      return sendJson(400, { success: false, error: 'Name and valid email are required' });
    }

    try {
      const isGoogle = email.endsWith('@gmail.com');
      const user = db.saveUser({
        name,
        email,
        avatar,
        provider: isGoogle ? 'google' : (body.provider || 'email')
      });

      const tokenData = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);

      const now = Date.now();
      db.saveSession({
        userId: user.id,
        refreshToken,
        userAgent: req.headers['user-agent'] || '',
        ip: req.socket?.remoteAddress || '',
        expiresAt: now + (REFRESH_TOKEN_EXPIRY_DAYS * 24 * 60 * 60 * 1000)
      });

      return sendJson(200, {
        success: true,
        user,
        accessToken: tokenData.accessToken,
        refreshToken,
        expiresIn: tokenData.expiresIn,
        tokenType: 'Bearer'
      });
    } catch (err) {
      return sendJson(500, { success: false, error: err.message });
    }
  }

  // Default handler
  return sendJson(200, {
    success: true,
    message: 'Tuneus Authentication & JWT Services Active',
    endpoints: {
      google: 'POST /api/auth/google',
      login: 'POST /api/auth/login',
      refresh: 'POST /api/auth/refresh',
      logout: 'POST /api/auth/logout',
      me: 'GET /api/auth/me',
      config: 'GET /api/auth/config',
      users: 'GET /api/auth/users'
    }
  });
};
