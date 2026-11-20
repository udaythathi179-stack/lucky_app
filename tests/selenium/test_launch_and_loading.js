const { By, until } = require('selenium-webdriver');
const { createDriver, getBrowserLogs } = require('./driver_helper');

async function testLaunchAndLoading(baseUrl = 'http://localhost:3000') {
  const results = { name: 'Suite 1: Launch and Loading', tests: [] };
  const driver = await createDriver();

  try {
    // 1. Page load timing
    const startTime = Date.now();
    await driver.get(baseUrl);
    const loadTime = Date.now() - startTime;
    results.tests.push({
      test: 'Application Launch Time',
      passed: loadTime < 5000,
      details: `Loaded in ${loadTime}ms (threshold: 5000ms)`
    });

    // 2. Title verification
    const title = await driver.getTitle();
    results.tests.push({
      test: 'Document Title Verification',
      passed: title.toLowerCase().includes('tuneus'),
      details: `Title: "${title}"`
    });

    // 3. Meta tags verification
    const themeColor = await driver.findElement(By.css('meta[name="theme-color"]')).getAttribute('content');
    const viewport = await driver.findElement(By.css('meta[name="viewport"]')).getAttribute('content');
    results.tests.push({
      test: 'Meta Tags (theme-color & viewport)',
      passed: Boolean(themeColor && viewport),
      details: `theme-color: ${themeColor}, viewport: ${viewport}`
    });

    // 4. Stylesheet loaded & applied
    const bodyBg = await driver.executeScript(() => {
      const el = document.body;
      return window.getComputedStyle(el).backgroundColor;
    });
    results.tests.push({
      test: 'CSS Stylesheet Computed Styles',
      passed: Boolean(bodyBg),
      details: `Body background-color: ${bodyBg}`
    });

    // 5. App Shell elements presence
    const searchInput = await driver.findElement(By.id('search')).isDisplayed();
    const homeDashboard = await driver.findElement(By.id('homeDashboard')).isDisplayed();
    const expandedModal = await driver.findElement(By.id('expandedModal'));
    results.tests.push({
      test: 'Core App Shell Elements (search, homeDashboard, expandedModal)',
      passed: searchInput && homeDashboard && Boolean(expandedModal),
      details: 'All core structural components mounted in DOM'
    });

    // 6. Manifest link
    const manifestHref = await driver.findElement(By.css('link[rel="manifest"]')).getAttribute('href');
    results.tests.push({
      test: 'PWA Web Manifest Link',
      passed: manifestHref.includes('manifest.json'),
      details: `Manifest URL: ${manifestHref}`
    });

    // 7. Check browser console logs
    const severeLogs = await getBrowserLogs(driver);
    results.tests.push({
      test: 'Browser Console Cleanliness',
      passed: severeLogs.length === 0,
      details: severeLogs.length === 0 ? '0 severe console errors' : `Found ${severeLogs.length} logs: ${JSON.stringify(severeLogs.slice(0, 3))}`
    });

  } catch (err) {
    results.tests.push({
      test: 'Suite 1 Execution',
      passed: false,
      error: err.message
    });
  } finally {
    await driver.quit();
  }

  return results;
}

module.exports = testLaunchAndLoading;

if (require.main === module) {
  testLaunchAndLoading().then(res => console.log(JSON.stringify(res, null, 2)));
}
