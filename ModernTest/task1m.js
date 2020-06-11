// const chromedriver = require('chromedriver');
// const {remote} = require('webdriverio');
const {
  By,
  Eyes,
  Target,
  VisualGridRunner
} = require('@applitools/eyes-webdriverio');
const {
  BrowserType,
  Configuration,
  DeviceName,
  ScreenOrientation
} = require('@applitools/eyes-selenium');

// let browser;
// let eyes;

describe('wdio5', function () {


    it('ultraFastTest', async () => {


  const eyes = new Eyes(new VisualGridRunner(10));

  try {

    // eyes.setBatch("UFG Hackathon", "Task 1");
    // eyes.setForceFullPageScreenshot(true); 

    const configuration = new Configuration();
    configuration.setBatch("UFG Hackathon", "Task 1")
    configuration.setAppName('Applitools Hackathon 2020');
    configuration.setTestName('Task 1');
    configuration.setForceFullPageScreenshot(true);
    configuration.setMatchLevel("Content");
    //Add Chrome browser with two different viewports
    configuration.addBrowser(1200, 700, BrowserType.CHROME);
    configuration.addBrowser(768, 700, BrowserType.CHROME);
    

    //Add Firefox browser with two different viewports
    configuration.addBrowser(1200, 700, BrowserType.FIREFOX);
    configuration.addBrowser(768, 700, BrowserType.FIREFOX);

    //Add Firefox browser with two different viewports
    configuration.addBrowser(1200, 700, BrowserType.CHROME_EDGE);
    configuration.addBrowser(768, 700, BrowserType.CHROME_EDGE);

    //Add iPhone 4 with Portrait mode
    configuration.addDeviceEmulation(DeviceName.iPhone_X, ScreenOrientation.PORTRAIT);

    // Set your private API key here or in the "APPLITOOLS_API_KEY" environment variable
    configuration.setApiKey("RhAPSyd7qQndu110jqybVopu4hF9w3KxBru4wQYU8Fwyg110");
    eyes.setConfiguration(configuration);
    driver = await eyes.open(driver);
    // driver = await eyes.open(driver,"Task 1",{ width: 800, height:  600});


    await driver.url("https://demo.applitools.com/gridHackathonV2.html");

    //⭐️To see visual bugs, change the above URL to:
    //  https://demo.applitools.com/index_v2.html and run the test again

    // Visual checkpoint #1.
    await eyes.check("Cross-Device Elements Test",Target.window());



    await eyes.closeAsync();
    // End the test.
    // const results = await eyes.close(); // will return only first TestResults, but as we have two browsers, we need more results
    const results = await eyes.getRunner().getAllTestResults(false);
    // console.log(results);
    // console.log(results.getAllResults());
    // await driver.close()

  } finally {
    // Close the browser.
    // await driver.close()

    // If the test was aborted before eyes.close was called ends the test as aborted.
    await eyes.abortIfNotClosed();
    await eyes.abort();

  }

       
});
});