// Serverless Auth API handler for Vercel
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      body = {};
    }
  }
  body = body || {};

  const cleanName = (body.name || req.query?.name || '').trim();
  const cleanEmail = (body.email || req.query?.email || '').toLowerCase().trim();

  if (!cleanName || !cleanEmail) {
    return res.status(400).json({ success: false, error: 'Name and email are required' });
  }

  const user = {
    id: 'usr_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    name: cleanName,
    email: cleanEmail,
    avatar: body.avatar || '',
    provider: cleanEmail.endsWith('@gmail.com') ? 'google' : 'email',
    createdAt: new Date().toISOString(),
    lastLoginAt: new Date().toISOString(),
    loginCount: 1
  };

  return res.status(200).json({ success: true, user });
};
