const https = require('https');
const crypto = require('crypto');
let CryptoJS;
try {
  CryptoJS = require('crypto-js');
} catch (e) {
  CryptoJS = null;
}

function decryptSaavnUrl(encrypted) {
  if (!encrypted) return '';
  if (CryptoJS) {
    try {
      const key = CryptoJS.enc.Utf8.parse('38346591');
      const decrypted = CryptoJS.DES.decrypt({ ciphertext: CryptoJS.enc.Base64.parse(encrypted) }, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
      const url = decrypted.toString(CryptoJS.enc.Utf8);
      if (url && url.startsWith('http')) {
        return url.replace(/_96\.mp4$/, '_320.mp4');
      }
    } catch (e) {}
  }
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

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const query = req.query.q || '';
  if (!query) {
    return res.status(200).json({ success: true, results: [] });
  }

  const saavnUrl = `https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=1&n=40&q=${encodeURIComponent(query)}`;

  return new Promise((resolve) => {
    https.get(saavnUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (apiRes) => {
      let data = '';
      apiRes.on('data', chunk => data += chunk);
      apiRes.on('end', () => {
        try {
          const json = JSON.parse(data);
          const seenKeys = new Set();
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
          }).filter(s => {
            if (!s.src || !s.title) return false;
            const cleanTitle = s.title
              .toLowerCase()
              .replace(/\s*\(.*?\)/g, '')
              .replace(/\s*\[.*?\]/g, '')
              .replace(/\s*-\s*(from|lyrical|remix|full video|audio|remastered|video song|single|original).*$/i, '')
              .replace(/[^a-z0-9]/g, '')
              .trim();
            const cleanLang = (s.language || 'all').toLowerCase().trim();
            const key = `${cleanTitle}__${cleanLang}`;
            if (cleanTitle && seenKeys.has(key)) return false;
            if (cleanTitle) seenKeys.add(key);
            return true;
          });

          res.status(200).json({ success: true, results });
          resolve();
        } catch (e) {
          res.status(500).json({ success: false, error: 'Parse error' });
          resolve();
        }
      });
    }).on('error', (e) => {
      res.status(502).json({ success: false, error: e.message });
      resolve();
    });
  });
};

