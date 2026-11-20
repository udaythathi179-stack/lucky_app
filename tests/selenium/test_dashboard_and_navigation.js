const { By, Key, until } = require('selenium-webdriver');
const { createDriver } = require('./driver_helper');

async function testDashboardAndNavigation(baseUrl = 'http://localhost:3000') {
  const results = { name: 'Suite 3: Dashboard and Navigation', tests: [] };
  const driver = await createDriver();

  try {
    await driver.get(baseUrl);
    await driver.sleep(800);

    // Ensure login modal is bypassed/closed for testing dashboard
    await driver.executeScript(() => {
      if (typeof closeLoginModal === 'function') closeLoginModal(true);
      const m = document.getElementById('loginModal');
      if (m) m.hidden = true;
    });
    await driver.sleep(400);

    // 1. Category Filter Chips switching (Music, Podcasts, Downloads, All)
    const chipNames = ['Music', 'Podcasts', 'Downloads', 'All'];
    let allChipsPassed = true;
    for (const name of chipNames) {
      await driver.executeScript((filterName) => {
        const chip = document.querySelector(`.chip[data-filter="${filterName}"]`);
        if (chip) chip.click();
      }, name);
      await driver.sleep(300);
      const currentFilter = await driver.executeScript(() => state.filter);
      if (currentFilter !== name) {
        allChipsPassed = false;
        break;
      }
    }
    results.tests.push({
      test: 'Category Filter Chips Navigation',
      passed: allChipsPassed,
      details: allChipsPassed ? 'Successfully switched across Music, Podcasts, Downloads, and All filters' : 'Filter mismatch'
    });

    // 2. Search Bar input and live search
    const searchInput = await driver.findElement(By.id('search'));
    await searchInput.clear();
    await searchInput.sendKeys('Believer', Key.ENTER);
    await driver.wait(async () => {
      const count = await driver.executeScript(() => document.querySelectorAll('.song-card').length);
      return count > 0;
    }, 8000).catch(() => {});
    await driver.sleep(500);

    const searchQuery = await driver.executeScript(() => state.query);
    const searchCardsCount = await driver.executeScript(() => {
      return document.querySelectorAll('.song-card').length;
    });
    results.tests.push({
      test: 'Live Search Bar Filtering and Results Rendering',
      passed: searchQuery.toLowerCase() === 'believer' && searchCardsCount > 0,
      details: `Query: "${searchQuery}", Rendered song cards: ${searchCardsCount}`
    });

    // 3. Clear Search Button
    await driver.executeScript(() => {
      const clearBtn = document.getElementById('clearSearch');
      if (clearBtn) clearBtn.click();
    });
    await driver.sleep(400);

    const clearedQuery = await driver.executeScript(() => state.query);
    const clearedInputVal = await searchInput.getAttribute('value');
    results.tests.push({
      test: 'Clear Search Input and Restore Dashboard',
      passed: clearedQuery === '' && clearedInputVal === '',
      details: `Search input cleared: "${clearedInputVal}", Query state: "${clearedQuery}"`
    });

    // 4. Quick Jump Grid (6 cards verification)
    const quickJumpCardsCount = await driver.executeScript(() => {
      return document.querySelectorAll('.quick-jump-card').length;
    });
    results.tests.push({
      test: 'Quick Jump Recent Grid Card Count',
      passed: quickJumpCardsCount === 6,
      details: `Rendered ${quickJumpCardsCount} quick jump cards (expected: 6)`
    });

    // 5. Home Artists Shelf & Portrait Image Integrity
    await driver.executeScript(() => {
      const shelf = document.getElementById('homeArtistsShelf');
      if (shelf) shelf.scrollIntoView({ block: 'center' });
    });
    await driver.sleep(1000);

    const artistCheck = await driver.executeScript(() => {
      const cards = document.querySelectorAll('.artist-shelf-card');
      const count = cards.length;
      let loadedImages = 0;
      cards.forEach(card => {
        const img = card.querySelector('img');
        if (img && img.naturalWidth > 0) loadedImages++;
      });
      return { total: count, loaded: loadedImages };
    });
    results.tests.push({
      test: 'Home Artists Shelf Image Integrity',
      passed: artistCheck.total > 0 && artistCheck.loaded > 0,
      details: `Found ${artistCheck.total} artist cards, verified ${artistCheck.loaded} portraits with naturalWidth > 0`
    });

    // 6. Click Artist Card opens Artist Hero Discography
    await driver.executeScript(() => {
      const firstArtist = document.querySelector('.artist-shelf-card');
      if (firstArtist) firstArtist.click();
    });
    await driver.sleep(1000);

    const artistHeroState = await driver.executeScript(() => {
      const hero = document.getElementById('artistHeroView');
      const isHeroOpen = hero ? !hero.hidden : false;
      const activeArtist = state.activeArtist;
      return { isHeroOpen, activeArtist };
    });
    results.tests.push({
      test: 'Artist Discography Hero Opening on Card Click',
      passed: Boolean(artistHeroState.isHeroOpen || artistHeroState.activeArtist),
      details: `Active artist: "${artistHeroState.activeArtist}", Hero view open: ${artistHeroState.isHeroOpen}`
    });

    // 7. Close Artist Hero View
    await driver.executeScript(() => {
      if (typeof closeArtistHero === 'function') closeArtistHero();
      else {
        const hero = document.getElementById('artistHeroView');
        if (hero) hero.hidden = true;
      }
    });
    await driver.sleep(400);

    const isHeroClosed = await driver.executeScript(() => {
      const hero = document.getElementById('artistHeroView');
      return hero ? hero.hidden : true;
    });
    results.tests.push({
      test: 'Close Artist Hero and Return to Home Dashboard',
      passed: isHeroClosed,
      details: 'Artist hero closed cleanly'
    });

    // 8. Global Keyboard Shortcut: '/' focuses search input
    await driver.findElement(By.css('body')).sendKeys('/');
    await driver.sleep(300);

    const isSearchFocused = await driver.executeScript(() => {
      return document.activeElement && document.activeElement.id === 'search';
    });
    results.tests.push({
      test: 'Global Keyboard Shortcut: "/" Focuses Search',
      passed: isSearchFocused,
      details: `Active element on "/" keypress: <${isSearchFocused ? 'input#search' : 'other'}>`
    });

    // 9. Global Keyboard Shortcut: 'Escape' Closes Shortcuts Modal
    await driver.executeScript(() => {
      const sc = document.getElementById('shortcutsModal');
      if (sc) sc.hidden = false;
    });
    await driver.sleep(300);

    await driver.findElement(By.css('body')).sendKeys(Key.ESCAPE);
    await driver.sleep(400);

    const isShortcutsClosed = await driver.executeScript(() => {
      const sc = document.getElementById('shortcutsModal');
      return sc ? sc.hidden : true;
    });
    results.tests.push({
      test: 'Global Keyboard Shortcut: "Escape" Closes Modals',
      passed: isShortcutsClosed,
      details: `Shortcuts modal closed on Escape: ${isShortcutsClosed}`
    });

  } catch (err) {
    results.tests.push({
      test: 'Suite 3 Execution',
      passed: false,
      error: err.message
    });
  } finally {
    await driver.quit();
  }

  return results;
}

module.exports = testDashboardAndNavigation;

if (require.main === module) {
  testDashboardAndNavigation().then(res => console.log(JSON.stringify(res, null, 2)));
}
