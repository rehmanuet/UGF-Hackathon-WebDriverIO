
const Utils = require('../utils/utils.js')

var assert = require('assert')
const {
    By,
    Eyes,
    Target,
    VisualGridRunner,
    Configuration

  } = require('@applitools/eyes-webdriverio');

  let eyes;

describe(`Task 2 -Traditional`, function () {
  

    it(`should filter black shoes correctly on  devices`, async function() {


        const runner = new VisualGridRunner();

        eyes = new Eyes(runner);
        const configuration = new Configuration();
    configuration.setAppName('Demo App');
    configuration.setTestName('Smoke Test');
    configuration.setApiKey("RhAPSyd7qQndu110jqybVopu4hF9w3KxBru4wQYU8Fwyg110");

    eyes.setConfiguration(configuration);
    await eyes.open(browser);

    await browser.url('https://demo.applitools.com/gridHackathonV1.html');

    // Visual checkpoint #1.
    await eyes.check('Login Window', Target.window());

    // Click the "Log in" button.
    // await driver.click(By.id('log-in'));
    const loginButton = await browser.$('#colors__Black');
    await loginButton.click();
    const loginButton1 = await browser.$('#filterBtn');
    await loginButton1.click();
 
    const t = await browser.$('#product_grid');
     // Visual checkpoint #2.
     await eyes.check('App Window', Target.region(t));

     await eyes.closeAsync();
  

    //   $('#colors__Black').click();
    //   $('#filterBtn').click()

    //   var results = $$('.grid_item').filter(function (item) {
    //     return item.isDisplayed();
   
    });

});

