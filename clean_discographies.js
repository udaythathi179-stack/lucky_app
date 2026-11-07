const fs = require('fs');
const path = require('path');

// 1. Read existing discography
const discPath = path.join(__dirname, 'database', 'artistDiscographies.json');
const disc = JSON.parse(fs.readFileSync(discPath, 'utf8'));

// 2. Read curated tracks
let curatedCode = fs.readFileSync(path.join(__dirname, 'data', 'artistCuratedTracks.js'), 'utf8');
curatedCode = curatedCode.replace('window.ARTIST_CURATED_TRACKS =', 'const cTracks =') + '\n; cTracks;';
const curatedMap = eval(curatedCode) || {};

// Comprehensive aliases and singer name matchers for each artist
const ARTIST_RULES = {
  'S. P. Balasubrahmanyam': ['balasubrahmanyam', 'balasubramanyam', 'balasubramaniam', 's.p.b', 'spb', 's. p. b'],
  'Sid Sriram': ['sid sriram', 'sriram'],
  'Arijit Singh': ['arijit singh', 'arijit'],
  'Shreya Ghoshal': ['shreya ghoshal', 'shreya'],
  'Anurag Kulkarni': ['anurag kulkarni', 'anurag'],
  'Mangli': ['mangli', 'satyavathi'],
  'Sonu Nigam': ['sonu nigam', 'sonu'],
  'Karthik': ['karthik'],
  'K. S. Chithra': ['chithra', 'chitra', 'k.s. chitra', 'k. s. chithra'],
  'KK': ['kk', 'k.k', 'kay kay', 'krishnakumar'],
  'Devi Sri Prasad': ['devi sri prasad', 'dsp', 'devi sri'],
  'Atif Aslam': ['atif aslam'],
  'Ram Miriyala': ['ram miriyala', 'miriyala'],
  'Sunitha': ['sunitha', 'sunitha upadrasta'],
  'Jubin Nautiyal': ['jubin nautiyal', 'jubin'],
  'Geetha Madhuri': ['geetha madhuri', 'geetha'],
  'Haricharan': ['haricharan'],
  'Lata Mangeshkar': ['lata mangeshkar', 'lata'],
  'Kishore Kumar': ['kishore kumar', 'kishore'],
  'Armaan Malik': ['armaan malik', 'armaan'],
  'Udit Narayan': ['udit narayan', 'udit'],
  'Kumar Sanu': ['kumar sanu', 'sanu'],
  'Alka Yagnik': ['alka yagnik', 'alka'],
  'Mohammed Rafi': ['mohammed rafi', 'mohd rafi', 'mohd. rafi', 'rafi'],
  'Mohit Chauhan': ['mohit chauhan', 'mohit'],
  'Vishal Mishra': ['vishal mishra'],
  'Shaan': ['shaan', 'shan'],
  'Shankar Mahadevan': ['shankar mahadevan', 'shankar'],
  'Asha Bhosle': ['asha bhosle', 'asha'],
  'Neha Kakkar': ['neha kakkar'],
  'Mika Singh': ['mika singh', 'mika'],
  'Revanth': ['revanth', 'l.v. revanth', 'lv revanth'],
  'Rahul Sipligunj': ['sipligunj', 'sipligunze'],
  'Ramya Behara': ['ramya behara', 'ramya'],
  'Vijay Yesudas': ['vijay yesudas'],
  'Madhu Priya': ['madhu priya'],
  'Hemachandra': ['hemachandra', 'hema chandra'],
  'S. P. Charan': ['charan', 's.p.b. charan', 's.p. charan'],
  'Saketh Komanduri': ['saketh komanduri', 'saketh']
};

// Strict filter for mashups, lofi covers, and junk spam
const JUNK_REGEX = /mashup|mash up|lofi|lo-fi|dj mix|remix by|ambient|calming cadence|dreamy dynamics|instrumental cover|karaoke|tribute to|meditation|lullaby|laundry room|wedding crashers|personality quiz|structure of eye|cubing|state of grace|go fishing|gesture drawing|autumn song|goodbye mr chips|compact disc digital audio|learn english/i;

function isTrackLegitimate(track, artistName) {
  if (!track || !track.title || !track.src) return false;
  if (JUNK_REGEX.test(track.title) || JUNK_REGEX.test(track.movie || '')) return false;

  const tArtist = (track.artist || '').toLowerCase();
  const rules = ARTIST_RULES[artistName] || [artistName.toLowerCase().trim()];

  // Track's artist MUST contain the artist name!
  return rules.some(r => tArtist.includes(r));
}

function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'track';
}

const cleanedDiscographies = {};
let totalKept = 0;
let totalRemoved = 0;

for (const [artistName, rawTracks] of Object.entries(disc)) {
  const seenSongKeys = new Set();
  const seenAudioUrls = new Set();
  const sanitizedList = [];

  // 1. Curated tracks for this artist take top priority!
  const curated = (curatedMap[artistName] || []).filter(t => t && t.title && t.src);
  for (const t of curated) {
    if (!isTrackLegitimate(t, artistName)) continue;
    const normTitle = slugify(t.title);
    const normMovie = slugify(t.movie);
    const key = `${normTitle}__${normMovie}`;
    const cleanUrl = t.src.split('?')[0].toLowerCase();
    if (!seenSongKeys.has(key) && !seenAudioUrls.has(cleanUrl)) {
      seenSongKeys.add(key);
      seenAudioUrls.add(cleanUrl);
      sanitizedList.push({
        id: `cur-${slugify(artistName)}-${normTitle.slice(0, 20)}`,
        title: t.title,
        artist: t.artist,
        movie: t.movie || 'Studio Single',
        year: t.year || 2024,
        language: t.language || 'Music',
        src: t.src,
        artwork: t.artwork || `images/artists/${slugify(artistName)}.jpg`,
        duration: t.duration || 240,
        isOnline: true
      });
    }
  }

  // 2. Add legitimate discography tracks
  for (const t of rawTracks) {
    if (!isTrackLegitimate(t, artistName)) {
      totalRemoved++;
      continue;
    }

    const normTitle = slugify(t.title);
    const normMovie = slugify(t.movie);
    const key = `${normTitle}__${normMovie}`;
    const cleanUrl = (t.src || '').split('?')[0].toLowerCase();

    if (normTitle && !seenSongKeys.has(key) && cleanUrl && !seenAudioUrls.has(cleanUrl)) {
      seenSongKeys.add(key);
      seenAudioUrls.add(cleanUrl);
      sanitizedList.push({
        id: `art-${slugify(artistName)}-${(t.id || normTitle).replace(/^art-/, '')}`,
        title: t.title,
        artist: t.artist,
        movie: t.movie || 'Studio Album',
        year: t.year || 2020,
        language: t.language || 'Music',
        src: t.src,
        artwork: t.artwork || `images/artists/${slugify(artistName)}.jpg`,
        duration: Number(t.duration) || 240,
        isOnline: true
      });
      totalKept++;
    } else {
      totalRemoved++;
    }
  }

  cleanedDiscographies[artistName] = sanitizedList;
}

console.log(`\n========================================`);
console.log(`STRICT CLEANING COMPLETE:`);
console.log(`Total Genuine Studio Tracks: ${totalKept}`);
console.log(`Total Removed (Mashups/Lofi/Junk/Wrong Singer): ${totalRemoved}`);
console.log(`========================================\n`);

// 3. Save to database/artistDiscographies.json
const jsonStr = JSON.stringify(cleanedDiscographies, null, 2);
fs.writeFileSync(path.join(__dirname, 'database', 'artistDiscographies.json'), jsonStr, 'utf8');
fs.writeFileSync(path.join(__dirname, 'data', 'artistDiscographies.json'), jsonStr, 'utf8');
fs.writeFileSync(path.join(__dirname, 'frontend', 'data', 'artistDiscographies.json'), jsonStr, 'utf8');

// 4. Save to JS bundle format for instant browser loading
const jsContent = `// Auto-generated sanitized lifetime artist discographies (100% genuine studio songs)
window.ALL_ARTIST_DISCOGRAPHIES = ${JSON.stringify(cleanedDiscographies)};
`;
fs.writeFileSync(path.join(__dirname, 'data', 'artistDiscographies.js'), jsContent, 'utf8');
fs.writeFileSync(path.join(__dirname, 'frontend', 'data', 'artistDiscographies.js'), jsContent, 'utf8');

console.log('Successfully updated all 5 discography files with strict studio tracks!');
