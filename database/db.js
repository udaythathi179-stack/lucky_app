/**
 * Tuneus Database Manager (database/db.js)
 * Clean, lightweight, file-backed JSON database interface
 */

const fs = require('fs');
const path = require('path');

const DB_DIR = __dirname;
const USERS_FILE = path.join(DB_DIR, 'users.json');
const DISCOGRAPHIES_FILE = path.join(DB_DIR, 'artistDiscographies.json');

// In-memory cache for high-throughput sub-millisecond queries
let usersCache = null;
let discographiesCache = null;

// --- Helper Functions ---
function readJSON(filePath, fallback = null) {
  try {
    if (!fs.existsSync(filePath)) return fallback;
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error(`[DB Error] Failed to read ${filePath}:`, err.message);
    return fallback;
  }
}

function writeJSONAtomic(filePath, data) {
  const tmpFile = `${filePath}.tmp.${Date.now()}`;
  try {
    fs.writeFileSync(tmpFile, JSON.stringify(data, null, 2), 'utf8');
    fs.renameSync(tmpFile, filePath);
    return true;
  } catch (err) {
    console.error(`[DB Error] Failed to write ${filePath}:`, err.message);
    try {
      if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile);
    } catch (_) {}
    return false;
  }
}

// --- Users Database API ---

function getUsers() {
  if (usersCache) return usersCache;
  const data = readJSON(USERS_FILE, []);
  usersCache = Array.isArray(data) ? data : [];
  return usersCache;
}

function getUserById(id) {
  if (!id) return null;
  const users = getUsers();
  return users.find((u) => u.id === id) || null;
}

function getUserByEmail(email) {
  if (!email) return null;
  const clean = email.toLowerCase().trim();
  const users = getUsers();
  return users.find((u) => (u.email || '').toLowerCase().trim() === clean) || null;
}

function saveUser(userData) {
  if (!userData || !userData.email) {
    throw new Error('Valid email is required to save user');
  }

  const users = getUsers();
  const emailLower = userData.email.toLowerCase().trim();
  const now = new Date().toISOString();

  let existingIndex = users.findIndex((u) => (u.email || '').toLowerCase().trim() === emailLower);

  if (existingIndex >= 0) {
    // Update existing user record
    const existing = users[existingIndex];
    users[existingIndex] = {
      ...existing,
      name: userData.name || existing.name,
      avatar: userData.avatar !== undefined ? userData.avatar : existing.avatar,
      provider: userData.provider || existing.provider || 'google',
      lastLoginAt: now,
      loginCount: (existing.loginCount || 1) + 1
    };
  } else {
    // Create new user record
    const newUser = {
      id: userData.id || `usr_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
      name: userData.name || userData.email.split('@')[0],
      email: emailLower,
      avatar: userData.avatar || 'images/avatar-uday.jpg',
      provider: userData.provider || 'google',
      createdAt: now,
      lastLoginAt: now,
      loginCount: 1
    };
    users.push(newUser);
    existingIndex = users.length - 1;
  }

  writeJSONAtomic(USERS_FILE, users);
  usersCache = users;
  return users[existingIndex];
}

function deleteUser(id) {
  const users = getUsers();
  const filtered = users.filter((u) => u.id !== id);
  if (filtered.length !== users.length) {
    writeJSONAtomic(USERS_FILE, filtered);
    usersCache = filtered;
    return true;
  }
  return false;
}

// --- Artist Discographies Database API ---

function getAllDiscographies() {
  if (discographiesCache) return discographiesCache;
  const data = readJSON(DISCOGRAPHIES_FILE, {});
  discographiesCache = data && typeof data === 'object' ? data : {};
  return discographiesCache;
}

function getArtistTracks(artistName) {
  if (!artistName) return [];
  const catalog = getAllDiscographies();
  if (catalog[artistName]) return catalog[artistName];

  // Alias / case-insensitive search
  const cleanTarget = artistName.toLowerCase().replace(/[\.\,\(\)]/g, ' ').replace(/\s+/g, ' ').trim();
  for (const [key, tracks] of Object.entries(catalog)) {
    const cleanKey = key.toLowerCase().replace(/[\.\,\(\)]/g, ' ').replace(/\s+/g, ' ').trim();
    if (cleanKey === cleanTarget || cleanKey.includes(cleanTarget) || cleanTarget.includes(cleanKey)) {
      return tracks;
    }
  }
  return [];
}

function searchTracks(query, limit = 50) {
  if (!query) return [];
  const q = query.toLowerCase().trim();
  const catalog = getAllDiscographies();
  const results = [];
  const seenIds = new Set();

  for (const artistTracks of Object.values(catalog)) {
    if (!Array.isArray(artistTracks)) continue;
    for (const track of artistTracks) {
      if (seenIds.has(track.id)) continue;
      const titleMatch = (track.title || '').toLowerCase().includes(q);
      const artistMatch = (track.artist || '').toLowerCase().includes(q);
      const movieMatch = (track.movie || '').toLowerCase().includes(q);

      if (titleMatch || artistMatch || movieMatch) {
        seenIds.add(track.id);
        results.push(track);
        if (results.length >= limit) return results;
      }
    }
  }
  return results;
}

function getStats() {
  const users = getUsers();
  const discographies = getAllDiscographies();
  let trackCount = 0;
  for (const list of Object.values(discographies)) {
    if (Array.isArray(list)) trackCount += list.length;
  }
  return {
    usersCount: users.length,
    artistsCount: Object.keys(discographies).length,
    totalStudioTracks: trackCount
  };
}

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  saveUser,
  deleteUser,
  getAllDiscographies,
  getArtistTracks,
  searchTracks,
  getStats,
  USERS_FILE,
  DISCOGRAPHIES_FILE
};
