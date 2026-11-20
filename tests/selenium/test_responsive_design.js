const { By } = require('selenium-webdriver');
const { createDriver } = require('./driver_helper');

async function testResponsiveDesign(baseUrl = 'http://localhost:3000') {
  const results = { name: 'Suite 6: Responsive Design & Viewport Adaptation', tests: [] };
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
    await driver.sleep(300);

    // 1. Viewport Meta Configuration
    const metaCheck = await driver.executeScript(() => {
      const meta = document.querySelector('meta[name="viewport"]');
      const content = meta ? meta.getAttribute('content') : '';
      return {
        hasMeta: Boolean(meta),
        content,
        hasDeviceWidth: content.includes('width=device-width'),
        hasCover: content.includes('viewport-fit=cover')
      };
    });

    results.tests.push({
      test: 'Mobile Viewport Meta Tag Configuration',
      passed: metaCheck.hasMeta && metaCheck.hasDeviceWidth && metaCheck.hasCover,
      details: `Viewport: "${metaCheck.content}"`
    });

    // 2. Desktop High-Res (1920x1080)
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    await driver.sleep(500);

    const desktopCheck = await driver.executeScript(() => {
      const scrollW = document.documentElement.scrollWidth;
      const innerW = window.innerWidth;
      const nav = document.getElementById('mobileBottomNav');
      const navStyle = nav ? window.getComputedStyle(nav) : null;
      return {
        hasOverflow: scrollW > innerW,
        scrollW,
        innerW,
        navMaxWidth: navStyle ? navStyle.maxWidth : ''
      };
    });

    results.tests.push({
      test: 'Desktop Viewport (1920x1080) Zero-Overflow & Dock Centering',
      passed: !desktopCheck.hasOverflow && desktopCheck.navMaxWidth === '640px',
      details: `Width: ${desktopCheck.innerW}px, Scroll: ${desktopCheck.scrollW}px, Nav max-width: ${desktopCheck.navMaxWidth}`
    });

    // 3. Laptop Resolution (1366x768)
    await driver.manage().window().setRect({ width: 1366, height: 768 });
    await driver.sleep(400);

    const laptopCheck = await driver.executeScript(() => {
      const scrollW = document.documentElement.scrollWidth;
      const innerW = window.innerWidth;
      return { hasOverflow: scrollW > innerW, scrollW, innerW };
    });

    results.tests.push({
      test: 'Laptop Viewport (1366x768) Zero-Overflow Layout',
      passed: !laptopCheck.hasOverflow,
      details: `Width: ${laptopCheck.innerW}px, Scroll: ${laptopCheck.scrollW}px`
    });

    // 4. Tablet Portrait Resolution (768x1024)
    await driver.manage().window().setRect({ width: 768, height: 1024 });
    await driver.sleep(400);

    const tabletCheck = await driver.executeScript(() => {
      const scrollW = document.documentElement.scrollWidth;
      const innerW = window.innerWidth;
      const chips = document.getElementById('topbarChipsScroll');
      const chipCount = document.querySelectorAll('.chip').length;
      return {
        hasOverflow: scrollW > innerW + 1,
        scrollW,
        innerW,
        hasChips: Boolean(chips && chips.offsetWidth > 0 && chipCount > 0)
      };
    });

    results.tests.push({
      test: 'Tablet Portrait (768x1024) Layout and Shelf Adaptation',
      passed: !tabletCheck.hasOverflow && tabletCheck.hasChips,
      details: `Width: ${tabletCheck.innerW}px, Scroll: ${tabletCheck.scrollW}px, Chips rendered: ${tabletCheck.hasChips}`
    });

    // 5. Mobile Resolution (375x812 - iPhone X) via Mobile Emulation
    await driver.sendDevToolsCommand('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 812,
      deviceScaleFactor: 2,
      mobile: true
    });
    await driver.sleep(500);

    const mobileCheck = await driver.executeScript(() => {
      const scrollW = document.documentElement.scrollWidth;
      const innerW = window.innerWidth;
      const nav = document.getElementById('mobileBottomNav');
      const tabs = nav ? Array.from(nav.querySelectorAll('.s-nav-item')).map(t => t.id) : [];
      return {
        hasOverflow: scrollW > innerW + 1,
        scrollW,
        innerW,
        tabCount: tabs.length,
        tabs
      };
    });

    results.tests.push({
      test: 'Mobile Viewport (375x812) 5-Tab Navigation Dock & Overflow',
      passed: !mobileCheck.hasOverflow && mobileCheck.tabCount === 5,
      details: `Width: ${mobileCheck.innerW}px, Scroll: ${mobileCheck.scrollW}px, Tabs: [${mobileCheck.tabs.join(', ')}]`
    });

    // 6. Mobile Tab Navigation Interactions
    const tabInteractionCheck = await driver.executeScript(() => {
      const searchTab = document.getElementById('tabSearch');
      if (searchTab) searchTab.click();
      const searchInput = document.getElementById('search');
      const searchFocused = document.activeElement === searchInput;

      const homeTab = document.getElementById('tabHome');
      if (homeTab) homeTab.click();
      const homeActive = homeTab ? homeTab.classList.contains('active') : false;

      return { searchFocused, homeActive };
    });

    results.tests.push({
      test: 'Mobile Bottom Tab Switching and Search Focus',
      passed: tabInteractionCheck.searchFocused && tabInteractionCheck.homeActive,
      details: `Search tab focused input: ${tabInteractionCheck.searchFocused}, Home tab restored active: ${tabInteractionCheck.homeActive}`
    });

    // 7. Small Mobile Resolution (320x568 - iPhone SE) via Mobile Emulation
    await driver.sendDevToolsCommand('Emulation.setDeviceMetricsOverride', {
      width: 320,
      height: 568,
      deviceScaleFactor: 2,
      mobile: true
    });
    await driver.sleep(400);

    const smallMobileCheck = await driver.executeScript(() => {
      const scrollW = document.documentElement.scrollWidth;
      const innerW = window.innerWidth;
      const avatar = document.querySelector('.topbar-avatar-img');
      return {
        hasOverflow: scrollW > innerW + 2,
        scrollW,
        innerW,
        hasAvatar: Boolean(avatar && avatar.offsetWidth > 0)
      };
    });

    results.tests.push({
      test: 'Small Mobile Screen (320x568) Constrained Viewport Integrity',
      passed: !smallMobileCheck.hasOverflow && smallMobileCheck.hasAvatar,
      details: `Width: ${smallMobileCheck.innerW}px, Scroll: ${smallMobileCheck.scrollW}px, Avatar visible: ${smallMobileCheck.hasAvatar}`
    });

    // Reset device emulation
    await driver.sendDevToolsCommand('Emulation.clearDeviceMetricsOverride', {});

  } catch (err) {
    results.tests.push({
      test: 'Suite 6 Execution',
      passed: false,
      error: err.message
    });
  } finally {
    await driver.quit();
  }

  return results;
}

module.exports = testResponsiveDesign;

if (require.main === module) {
  testResponsiveDesign().then(res => console.log(JSON.stringify(res, null, 2)));
}
