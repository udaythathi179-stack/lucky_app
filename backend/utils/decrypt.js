/**
 * JioSaavn Media Decryption Utility (backend/utils/decrypt.js)
 * Decrypts DES-ECB encrypted streaming tokens to 320kbps / 160kbps / 96kbps MP4 links
 */

const crypto = require('crypto');
let CryptoJS;
try {
  CryptoJS = require('crypto-js');
} catch (e) {
  CryptoJS = null;
}

function decryptSaavnUrl(encrypted, quality = '320') {
  if (!encrypted) return '';
  const targetBitrate = quality === '96' ? '_96.mp4' : quality === '160' ? '_160.mp4' : '_320.mp4';

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

module.exports = {
  decryptSaavnUrl
};
