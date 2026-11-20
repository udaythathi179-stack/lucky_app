/**
 * System Stats API Handler (backend/api/stats.js)
 */

const db = require('../../database/db');

module.exports = function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status ? res.status(204).end() : (res.writeHead(204), res.end());
  }

  const stats = db.getStats();
  const payload = { success: true, ...stats };

  if (res.status) return res.status(200).json(payload);
  res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
  return res.end(JSON.stringify(payload));
};
