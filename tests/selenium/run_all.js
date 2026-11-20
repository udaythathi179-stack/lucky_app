/**
 * Tuneus Music App - Master Test Automation Runner
 * Executes all 7 Selenium & API Test Suites
 */

const testLaunchAndLoading = require('./test_launch_and_loading');
const testAuthAndSecurity = require('./test_auth_and_security');
const testDashboardAndNavigation = require('./test_dashboard_and_navigation');
const testAudioPlaybackAndPerformance = require('./test_audio_playback_and_performance');
const testCrudPlaylists = require('./test_crud_playlists');
const testResponsiveDesign = require('./test_responsive_design');
const testApisAndDatabase = require('./test_apis_and_database');

async function runAllSuites(baseUrl = 'http://localhost:3000') {
  console.log(`========================================================================`);
  console.log(`   TUNEUS 2509 - COMPREHENSIVE SELENIUM AUTOMATION TEST RUNNER         `);
  console.log(`   Target URL: ${baseUrl}                                              `);
  console.log(`   Start Time: ${new Date().toISOString()}                             `);
  console.log(`========================================================================\n`);

  const suites = [
    { id: 1, fn: testLaunchAndLoading, name: 'Launch, PWA & Core Assets' },
    { id: 2, fn: testAuthAndSecurity, name: 'Authentication, Security & Persistence' },
    { id: 3, fn: testDashboardAndNavigation, name: 'Dashboard, Search, Filter & Artists' },
    { id: 4, fn: testAudioPlaybackAndPerformance, name: 'Audio Playback, Preload & EQ' },
    { id: 5, fn: testCrudPlaylists, name: 'CRUD Playlists & Favorites' },
    { id: 6, fn: testResponsiveDesign, name: 'Responsive Design & Multi-Device Viewports' },
    { id: 7, fn: testApisAndDatabase, name: 'APIs, Database Persistence & Hardening' }
  ];

  const overallResults = {
    totalSuites: suites.length,
    suitesPassed: 0,
    suitesFailed: 0,
    totalTests: 0,
    totalPassed: 0,
    totalFailed: 0,
    durationMs: 0,
    suiteDetails: []
  };

  const startTime = Date.now();

  for (const s of suites) {
    console.log(`\n>>> Executing Suite ${s.id}: ${s.name}...`);
    const sStart = Date.now();
    let res;
    try {
      res = await s.fn(baseUrl);
    } catch (err) {
      res = {
        name: `Suite ${s.id}: ${s.name}`,
        tests: [{ test: 'Suite Execution Exception', passed: false, details: err.message }]
      };
    }
    const sDuration = Date.now() - sStart;

    let suitePassCount = 0;
    let suiteFailCount = 0;

    for (const t of res.tests) {
      overallResults.totalTests++;
      if (t.passed) {
        overallResults.totalPassed++;
        suitePassCount++;
        console.log(`  [PASS] ${t.test} (${t.details || 'OK'})`);
      } else {
        overallResults.totalFailed++;
        suiteFailCount++;
        console.log(`  [FAIL] ${t.test} - ${t.details || t.error || 'Failed'}`);
      }
    }

    const suitePassed = suiteFailCount === 0;
    if (suitePassed) overallResults.suitesPassed++;
    else overallResults.suitesFailed++;

    overallResults.suiteDetails.push({
      id: s.id,
      name: res.name || s.name,
      durationMs: sDuration,
      testsCount: res.tests.length,
      passedCount: suitePassCount,
      failedCount: suiteFailCount,
      tests: res.tests
    });

    console.log(`--- Suite ${s.id} Summary: ${suitePassCount}/${res.tests.length} passed in ${sDuration}ms ---`);
  }

  overallResults.durationMs = Date.now() - startTime;

  console.log(`\n========================================================================`);
  console.log(`   AUTOMATION EXECUTION COMPLETE                                        `);
  console.log(`   Suites: ${overallResults.suitesPassed}/${overallResults.totalSuites} passed`);
  console.log(`   Tests : ${overallResults.totalPassed}/${overallResults.totalTests} passed (${overallResults.totalFailed} failed)`);
  console.log(`   Time  : ${(overallResults.durationMs / 1000).toFixed(2)} seconds    `);
  console.log(`========================================================================\n`);

  return overallResults;
}

module.exports = runAllSuites;

if (require.main === module) {
  runAllSuites().then(res => {
    if (res.totalFailed > 0) {
      process.exitCode = 1;
    }
  });
}
