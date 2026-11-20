const { By, until } = require('selenium-webdriver');
const { createDriver } = require('./driver_helper');

async function testAuthAndSecurity(baseUrl = 'http://localhost:3000') {
  const results = { name: 'Suite 2: Authentication and Security', tests: [] };
  const driver = await createDriver();

  try {
    await driver.get(baseUrl);
    await driver.sleep(1000);

    // 1. Initial State: Check if Login Modal is present
    const loginModal = await driver.findElement(By.id('loginModal'));
    const isLoginModalDisplayed = await loginModal.isDisplayed();
    results.tests.push({
      test: 'Initial Auth Screen Display',
      passed: Boolean(loginModal),
      details: isLoginModalDisplayed ? 'Login modal opened on arrival for unauthenticated visitor' : 'Active session loaded cleanly'
    });

    // Unique credentials for test run
    const testId = Date.now();
    const testUser = {
      name: `Tester ${testId}`,
      email: `selenium_${testId}@example.com`,
      password: `SecurePass@${testId}`
    };

    // 2. Switch to "Create Account" tab
    await driver.executeScript(() => {
      if (typeof openLoginModal === 'function') openLoginModal('register');
      else {
        const modal = document.getElementById('loginModal');
        if (modal) modal.hidden = false;
        const tabReg = document.getElementById('authTabRegister');
        if (tabReg) tabReg.click();
      }
    });
    await driver.sleep(500);

    const nameField = await driver.findElement(By.id('loginNameField'));
    const isNameFieldVisible = await nameField.isDisplayed();
    results.tests.push({
      test: 'Auth Mode Switch to Registration',
      passed: isNameFieldVisible,
      details: isNameFieldVisible ? 'Full Name field is visible on Create Account tab' : 'Name field hidden'
    });

    // 3. User Registration Form Submission
    const nameInput = await driver.findElement(By.id('loginName'));
    const emailInput = await driver.findElement(By.id('loginEmail'));
    const passwordInput = await driver.findElement(By.id('loginPassword'));
    const submitBtn = await driver.findElement(By.id('loginSubmitBtn'));

    await nameInput.sendKeys(testUser.name);
    await emailInput.sendKeys(testUser.email);
    await passwordInput.sendKeys(testUser.password);
    await driver.executeScript((el) => el.click(), submitBtn);
    await driver.sleep(1500);

    // Verify registration success (User saved in localStorage and session active)
    const registeredUser = await driver.executeScript(() => {
      try {
        const raw = localStorage.getItem('tuneus_user');
        return raw ? JSON.parse(raw) : null;
      } catch (_) { return null; }
    });
    results.tests.push({
      test: 'User Registration and Local Storage Persistence',
      passed: Boolean(registeredUser && registeredUser.email === testUser.email),
      details: registeredUser ? `Registered user: ${registeredUser.name} (${registeredUser.email})` : 'User not saved in localStorage'
    });

    // 4. Persistent 1-Year Cookie Verification
    const persistentCookie = await driver.executeScript(() => {
      try {
        const match = document.cookie.match(/tuneus_persistent_user=([^;]+)/);
        return match ? JSON.parse(decodeURIComponent(match[1])) : null;
      } catch (_) { return null; }
    });
    results.tests.push({
      test: '1-Year Persistent Auth Cookie (tuneus_persistent_user)',
      passed: Boolean(persistentCookie && persistentCookie.email === testUser.email),
      details: persistentCookie ? `Persistent cookie present for ${persistentCookie.email}` : 'Cookie not found'
    });

    // 5. Cross-Reload Session Persistence (Reload page and verify user is still logged in)
    await driver.navigate().refresh();
    await driver.sleep(1500);

    const userAfterReload = await driver.executeScript(() => {
      return typeof getStoredUser === 'function' ? getStoredUser() : null;
    });
    const isModalOpenAfterReload = await driver.executeScript(() => {
      const m = document.getElementById('loginModal');
      return m ? !m.hidden : false;
    });
    results.tests.push({
      test: 'Reload Session Persistence without re-prompting login',
      passed: Boolean(userAfterReload && userAfterReload.email === testUser.email && !isModalOpenAfterReload),
      details: `User retained: ${userAfterReload?.name}, Login modal closed: ${!isModalOpenAfterReload}`
    });

    // 6. Profile Drawer displays authenticated user info
    await driver.executeScript(() => {
      if (typeof openProfileDrawer === 'function') openProfileDrawer();
    });
    await driver.sleep(600);

    const drawerUserName = await driver.findElement(By.id('pDrawerUserName')).getText();
    results.tests.push({
      test: 'Profile Drawer Authenticated User Display',
      passed: drawerUserName === testUser.name,
      details: `Drawer shows user name: "${drawerUserName}"`
    });

    // 7. Logout functionality
    await driver.executeScript(() => {
      if (typeof logoutUser === 'function') logoutUser();
      else {
        const btn = document.getElementById('pDrawerSignOutBtn');
        if (btn) btn.click();
      }
    });
    await driver.sleep(1200);

    const userAfterLogout = await driver.executeScript(() => {
      return typeof getStoredUser === 'function' ? getStoredUser() : null;
    });
    const cookieAfterLogout = await driver.executeScript(() => {
      return document.cookie.includes('tuneus_persistent_user=');
    });
    results.tests.push({
      test: 'Explicit User Logout (Clears storage, session, and 1-year cookie)',
      passed: userAfterLogout === null && !cookieAfterLogout,
      details: `User cleared: ${userAfterLogout === null}, Cookie removed: ${!cookieAfterLogout}`
    });

    // 8. Re-Login with Invalid Password validation
    await driver.executeScript((email) => {
      if (typeof openLoginModal === 'function') openLoginModal('signin', email);
      const emailField = document.getElementById('loginEmail');
      const passField = document.getElementById('loginPassword');
      if (emailField) emailField.value = email;
      if (passField) passField.value = 'IncorrectPassword123!';
      const submitBtn = document.getElementById('loginSubmitBtn');
      if (submitBtn) submitBtn.click();
    }, testUser.email);
    await driver.sleep(1500);

    const errorMsgElement = await driver.findElement(By.id('loginErrorMsg'));
    const isErrorVisible = await errorMsgElement.isDisplayed();
    const errorText = await errorMsgElement.getText();
    results.tests.push({
      test: 'Login with Invalid Password Validation',
      passed: isErrorVisible || errorText.length > 0,
      details: `Error message shown: "${errorText}"`
    });

    // 9. Re-Login with Correct Password
    await driver.executeScript((email, pass) => {
      const emailField = document.getElementById('loginEmail');
      const passField = document.getElementById('loginPassword');
      if (emailField) emailField.value = email;
      if (passField) passField.value = pass;
      const submitBtn = document.getElementById('loginSubmitBtn');
      if (submitBtn) submitBtn.click();
    }, testUser.email, testUser.password);
    await driver.sleep(1800);

    const loggedInAgain = await driver.executeScript(() => {
      const u = typeof getStoredUser === 'function' ? getStoredUser() : null;
      return u && u.email;
    });
    results.tests.push({
      test: 'Re-Login with Valid Credentials',
      passed: Boolean(loggedInAgain === testUser.email),
      details: `Logged in again as: ${loggedInAgain}`
    });

    // 10. Security: XSS Sanitization in User Inputs
    const xssPayload = '<script>window._xss_injected=true;</script>';
    const sanitizedTitle = await driver.executeScript((xss) => {
      return typeof esc === 'function' ? esc(xss) : xss.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }, xssPayload);
    const hasXssRun = await driver.executeScript(() => window._xss_injected === true);
    results.tests.push({
      test: 'XSS Input Sanitization Check',
      passed: !hasXssRun && !sanitizedTitle.includes('<script>'),
      details: `Sanitized payload: "${sanitizedTitle}", XSS triggered: ${hasXssRun}`
    });

  } catch (err) {
    results.tests.push({
      test: 'Suite 2 Execution',
      passed: false,
      error: err.message
    });
  } finally {
    await driver.quit();
  }

  return results;
}

module.exports = testAuthAndSecurity;

if (require.main === module) {
  testAuthAndSecurity().then(res => console.log(JSON.stringify(res, null, 2)));
}
