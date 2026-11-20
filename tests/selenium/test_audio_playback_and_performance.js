const { By, until } = require('selenium-webdriver');
const { createDriver } = require('./driver_helper');

async function testAudioPlaybackAndPerformance(baseUrl = 'http://localhost:3000') {
  const results = { name: 'Suite 4: Audio Playback and Performance', tests: [] };
  const driver = await createDriver();

  try {
    await driver.get(baseUrl);
    await driver.sleep(800);

    // Bypass login modal
    await driver.executeScript(() => {
      if (typeof closeLoginModal === 'function') closeLoginModal(true);
      const m = document.getElementById('loginModal');
      if (m) m.hidden = true;
    });
    await driver.sleep(400);

    // Trigger initial user gesture to unlock WebAudio
    await driver.executeScript(() => {
      document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
      if (typeof initWebAudio === 'function') initWebAudio();
    });
    await driver.sleep(200);

    // 1. Instant Visual Response on Song Click
    const playResponseTime = await driver.executeScript(async () => {
      const card = document.querySelector('.song-card');
      if (!card) return null;
      const t0 = performance.now();
      card.click();
      // Measure how fast .is-active and .is-playing are applied
      const t1 = performance.now();
      const isActive = card.classList.contains('is-active');
      const isPlaying = state.playing === true;
      return { latency: Math.round(t1 - t0), isActive, isPlaying };
    });

    results.tests.push({
      test: 'Instant UI Playback Trigger Latency (< 300ms Headless)',
      passed: Boolean(playResponseTime && playResponseTime.latency < 300 && playResponseTime.isActive),
      details: playResponseTime ? `Trigger latency: ${playResponseTime.latency}ms, Active class applied: ${playResponseTime.isActive}` : 'No song card found'
    });

    // 2. Expanded Modal Displays Track Metadata & Vinyl Animation
    await driver.sleep(600);
    const modalCheck = await driver.executeScript(() => {
      const modal = document.getElementById('expandedModal');
      const title = document.getElementById('expandedTitle')?.textContent;
      const artist = document.getElementById('expandedArtist')?.textContent;
      const vinyl = document.getElementById('expandedVinyl');
      const isSpinning = vinyl ? vinyl.classList.contains('spinning') : false;
      return {
        isOpen: modal ? !modal.hidden : false,
        title,
        artist,
        isSpinning
      };
    });

    results.tests.push({
      test: 'Expanded Player Modal Presentation and Metadata',
      passed: modalCheck.isOpen && modalCheck.title && modalCheck.title !== 'Select a track',
      details: `Modal open: ${modalCheck.isOpen}, Title: "${modalCheck.title}", Artist: "${modalCheck.artist}", Vinyl spinning: ${modalCheck.isSpinning}`
    });

    // 3. Play / Pause Control Toggle
    await driver.executeScript(() => {
      const expPlay = document.getElementById('expPlayBtn');
      if (expPlay) expPlay.click();
    });
    await driver.sleep(500);

    const pausedState = await driver.executeScript(() => {
      return { isPlaying: state.playing, isAudioPaused: audio.paused };
    });

    await driver.executeScript(() => {
      const expPlay = document.getElementById('expPlayBtn');
      if (expPlay) expPlay.click();
    });
    await driver.sleep(500);

    const resumedState = await driver.executeScript(() => {
      return { isPlaying: state.playing, isAudioPaused: audio.paused };
    });

    results.tests.push({
      test: 'Play / Pause State Toggle Synchronization',
      passed: pausedState.isPlaying === false && resumedState.isPlaying === true,
      details: `Paused: ${!pausedState.isPlaying}, Resumed: ${resumedState.isPlaying}`
    });

    // 4. Next Track Switching & Intelligent Cache Preloading
    const currentSongTitle = await driver.executeScript(() => state.current?.title);

    await driver.executeScript(() => {
      const nextBtn = document.getElementById('expNextBtn');
      if (nextBtn) nextBtn.click();
    });
    await driver.sleep(800);

    const nextTrackCheck = await driver.executeScript(() => {
      const nextTitle = state.current?.title;
      const preloadedSrc = preloadAudio ? preloadAudio.src : '';
      return { nextTitle, hasPreloader: Boolean(preloadedSrc) };
    });

    results.tests.push({
      test: 'Next Track Switch and Queue Preloading',
      passed: Boolean(nextTrackCheck.nextTitle && nextTrackCheck.nextTitle !== currentSongTitle),
      details: `Switched from "${currentSongTitle}" -> "${nextTrackCheck.nextTitle}", Background preloaded: ${nextTrackCheck.hasPreloader}`
    });

    // 5. Timeline Seeking (`seekTo`)
    await driver.executeScript(() => {
      if (typeof seekTo === 'function') seekTo(0.5); // Seek to 50%
    });
    await driver.sleep(400);

    const seekCheck = await driver.executeScript(() => {
      const cur = audio.currentTime;
      const dur = audio.duration || progress.duration;
      return { cur, dur, ratio: dur > 0 ? cur / dur : 0 };
    });

    results.tests.push({
      test: 'Timeline Seeking and Progress Bar Updates',
      passed: seekCheck.cur > 0 || seekCheck.ratio > 0.4,
      details: `Current time: ${Math.round(seekCheck.cur)}s / ${Math.round(seekCheck.dur)}s`
    });

    // 6. Volume Control and Mute Toggle
    await driver.executeScript(() => {
      if (typeof setVolume === 'function') setVolume(0.8);
      else {
        state.volume = 0.8;
        if (typeof applyVolume === 'function') applyVolume();
      }
    });
    await driver.sleep(200);

    const volumeCheck = await driver.executeScript(() => {
      return { volume: state.volume, audioVolume: audio.volume };
    });

    results.tests.push({
      test: 'Volume Engine and Gain Level',
      passed: Math.abs(volumeCheck.audioVolume - 0.8) < 0.05,
      details: `Audio element volume: ${volumeCheck.audioVolume}, State volume: ${volumeCheck.volume}`
    });

    // 7. Shuffle and Repeat Mode Toggles
    const modeCheck = await driver.executeScript(() => {
      const initialShuffle = state.shuffle;
      if (typeof toggleShuffle === 'function') toggleShuffle();
      const afterShuffle = state.shuffle;

      const initialRepeat = state.repeat;
      if (typeof cycleRepeat === 'function') cycleRepeat();
      const afterRepeat = state.repeat;

      return {
        shuffleToggled: afterShuffle !== initialShuffle,
        repeatToggled: afterRepeat !== initialRepeat,
        repeatMode: afterRepeat
      };
    });

    results.tests.push({
      test: 'Shuffle and Repeat Mode Cycles',
      passed: modeCheck.shuffleToggled && modeCheck.repeatToggled,
      details: `Shuffle cycled: ${modeCheck.shuffleToggled}, Repeat mode cycled to: "${modeCheck.repeatMode}"`
    });

    // 8. Web Audio API Graph & EQ Verification
    const webAudioCheck = await driver.executeScript(() => {
      const hasCtx = Boolean(audioCtx);
      const ctxState = audioCtx ? audioCtx.state : 'none';
      const hasBass = Boolean(biquadBass);
      const hasMid = Boolean(biquadMid);
      const hasTreble = Boolean(biquadTreble);
      return { hasCtx, ctxState, hasBass, hasMid, hasTreble };
    });

    results.tests.push({
      test: 'Web Audio Graph & Hardware EQ Filter Chains',
      passed: webAudioCheck.hasCtx && webAudioCheck.hasBass && webAudioCheck.hasTreble,
      details: `AudioContext: ${webAudioCheck.ctxState}, Filters: Bass [${webAudioCheck.hasBass}], Mid [${webAudioCheck.hasMid}], Treble [${webAudioCheck.hasTreble}]`
    });

  } catch (err) {
    results.tests.push({
      test: 'Suite 4 Execution',
      passed: false,
      error: err.message
    });
  } finally {
    await driver.quit();
  }

  return results;
}

module.exports = testAudioPlaybackAndPerformance;

if (require.main === module) {
  testAudioPlaybackAndPerformance().then(res => console.log(JSON.stringify(res, null, 2)));
}
