const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const client = parsed.protocol === 'https:' ? https : http;

    const req = client.request(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    });

    req.on('error', reject);
    if (options.body) req.write(options.body);
    req.end();
  });
}

async function testApisAndDatabase(baseUrl = 'http://localhost:3000') {
  const results = { name: 'Suite 7: APIs, Database Persistence & Security', tests: [] };

  try {
    // 1. Search API Request (/api/search?q=Believer)
    const searchRes = await makeRequest(`${baseUrl}/api/search?q=Believer`);
    let searchData = null;
    try { searchData = JSON.parse(searchRes.body); } catch (_) {}

    results.tests.push({
      test: 'Catalog Search API Endpoint (/api/search?q=Believer)',
      passed: searchRes.statusCode === 200 && searchData && searchData.success && Array.isArray(searchData.results),
      details: `Status: ${searchRes.statusCode}, Track count: ${searchData ? searchData.results?.length : 0}`
    });

    // 2. Artist Discography API Request (/api/artist-discography?name=Anirudh+Ravichander)
    const artistRes = await makeRequest(`${baseUrl}/api/artist-discography?name=Anirudh+Ravichander`);
    let artistData = null;
    try { artistData = JSON.parse(artistRes.body); } catch (_) {}

    results.tests.push({
      test: 'Artist Discography API Endpoint (/api/artist-discography)',
      passed: artistRes.statusCode === 200 && artistData && artistData.success && Array.isArray(artistData.results) && artistData.results.length > 0,
      details: `Status: ${artistRes.statusCode}, Songs returned: ${artistData?.results?.length}`
    });

    // 3. Audio Stream Proxy Range Support (/api/stream)
    const sampleAudioUrl = 'https://aac.saavncdn.com/047/d6531b0472740abf894785de3fb6f6b5_320.mp4';
    const streamRes = await makeRequest(`${baseUrl}/api/stream?url=${encodeURIComponent(sampleAudioUrl)}`, {
      headers: { 'Range': 'bytes=0-1024' }
    });

    results.tests.push({
      test: 'Audio Stream Proxy Range Chunking (/api/stream)',
      passed: (streamRes.statusCode === 200 || streamRes.statusCode === 206) && streamRes.headers['accept-ranges'] === 'bytes',
      details: `Status: ${streamRes.statusCode}, Accept-Ranges: "${streamRes.headers['accept-ranges']}", Content-Type: "${streamRes.headers['content-type']}"`
    });

    // 4. Authentication Security & Me Endpoint (/api/auth/me)
    const unauthRes = await makeRequest(`${baseUrl}/api/auth/me`);
    let unauthData = null;
    try { unauthData = JSON.parse(unauthRes.body); } catch (_) {}

    results.tests.push({
      test: 'Unauthenticated Access Protection (/api/auth/me)',
      passed: unauthRes.statusCode === 401 || (unauthData && unauthData.user === null),
      details: `Status: ${unauthRes.statusCode}, User returned: ${Boolean(unauthData?.user)}`
    });

    // 5. System Stats API Endpoint (/api/stats)
    const statsRes = await makeRequest(`${baseUrl}/api/stats`);
    let statsData = null;
    try { statsData = JSON.parse(statsRes.body); } catch (_) {}

    results.tests.push({
      test: 'System Stats API Metrics (/api/stats)',
      passed: statsRes.statusCode === 200 && statsData && statsData.success && typeof statsData.usersCount === 'number',
      details: `Status: ${statsRes.statusCode}, Users: ${statsData?.usersCount}, Artists: ${statsData?.artistsCount}`
    });

    // 6. Security & Path Traversal Prevention
    const traversalRes = await makeRequest(`${baseUrl}/..%2F..%2Fetc/passwd`);
    const envBlockedRes = await makeRequest(`${baseUrl}/.env`);
    const dbBlockedRes = await makeRequest(`${baseUrl}/database/users.json`);

    results.tests.push({
      test: 'Directory Traversal & Sensitive File Exposure Prevention',
      passed: [400, 403, 404].includes(traversalRes.statusCode) &&
              [403, 404].includes(envBlockedRes.statusCode) &&
              [403, 404].includes(dbBlockedRes.statusCode),
      details: `Traversal status: ${traversalRes.statusCode}, .env status: ${envBlockedRes.statusCode}, db status: ${dbBlockedRes.statusCode}`
    });

    // 7. Database File Integrity & SHA-256 Salted Password Hashing Check
    const dbDir = path.resolve(__dirname, '..', '..', 'database');
    const usersPath = path.join(dbDir, 'users.json');
    const sessionsPath = path.join(dbDir, 'sessions.json');
    const discographiesPath = path.join(dbDir, 'artistDiscographies.json');

    const usersExist = fs.existsSync(usersPath);
    const sessionsExist = fs.existsSync(sessionsPath);
    const discographiesExist = fs.existsSync(discographiesPath);

    let users = [];
    let allPasswordsHashed = true;
    if (usersExist) {
      users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
      allPasswordsHashed = users.every(u => !u.password || u.password.startsWith('sha256:'));
    }

    let discographies = {};
    if (discographiesExist) {
      discographies = JSON.parse(fs.readFileSync(discographiesPath, 'utf8'));
    }

    const artistCount = Object.keys(discographies).length;

    results.tests.push({
      test: 'Database Integrity & SHA-256 Hashing Verification',
      passed: usersExist && sessionsExist && discographiesExist && allPasswordsHashed && artistCount >= 50,
      details: `Users: ${users.length} (Hashed: ${allPasswordsHashed}), Artists: ${artistCount}, Sessions file exists: ${sessionsExist}`
    });

  } catch (err) {
    results.tests.push({
      test: 'Suite 7 Execution',
      passed: false,
      error: err.message
    });
  }

  return results;
}

module.exports = testApisAndDatabase;

if (require.main === module) {
  testApisAndDatabase().then(res => console.log(JSON.stringify(res, null, 2)));
}
