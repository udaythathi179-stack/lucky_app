const { Builder, Capabilities } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

function createDriver(width = 1366, height = 768) {
  const options = new chrome.Options();
  options.addArguments('--headless=new');
  options.addArguments('--no-sandbox');
  options.addArguments('--disable-dev-shm-usage');
  options.addArguments('--disable-gpu');
  options.addArguments('--disable-web-security');
  options.addArguments(`--window-size=${width},${height}`);
  options.addArguments('--autoplay-policy=no-user-gesture-required');

  // Enable browser console logs collection
  const prefs = new Capabilities();
  prefs.set('goog:loggingPrefs', { browser: 'ALL' });

  return new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .withCapabilities(prefs)
    .build();
}

async function getBrowserLogs(driver) {
  try {
    const logs = await driver.manage().logs().get('browser');
    return logs.filter(log => log.level.name === 'SEVERE' || log.level.name === 'WARNING');
  } catch (_) {
    return [];
  }
}

module.exports = {
  createDriver,
  getBrowserLogs
};
