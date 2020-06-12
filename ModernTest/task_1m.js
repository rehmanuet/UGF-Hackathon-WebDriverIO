const {
  By,
  Eyes,
  Target,
  VisualGridRunner
} = require('@applitools/eyes-webdriverio');
const {
  DeviceName,
  BrowserType,
  Configuration,
  ScreenOrientation
} = require('@applitools/eyes-selenium');

describe('Task 1 - Modern UFG Testing', function() {

  it('should verify the display of different componenets', async () => {

    const eyes = new Eyes(new VisualGridRunner(10));

    try {

      const configuration = new Configuration();

      configuration.setBatch("UFG Hackathon", "Task 1")
      configuration.setAppName('Applitools Hackathon 2020');
      configuration.setTestName('Task 1');
      configuration.setForceFullPageScreenshot(true);
      configuration.setMatchLevel("Content");
      configuration.setApiKey("RhAPSyd7qQndu110jqybVopu4hF9w3KxBru4wQYU8Fwyg110");

      //Chrome browser with two different viewports (Laptop, Tablet)
      configuration.addBrowser(1200, 700, BrowserType.CHROME);
      configuration.addBrowser(768, 700, BrowserType.CHROME);

      //Firefox browser with two different viewports (Laptop, Tablet)
      configuration.addBrowser(1200, 700, BrowserType.FIREFOX);
      configuration.addBrowser(768, 700, BrowserType.FIREFOX);

      //Chromium Edge Browser with two different viewports (Laptop, Tablet)
      configuration.addBrowser(1200, 700, BrowserType.CHROME_EDGE);
      configuration.addBrowser(768, 700, BrowserType.CHROME_EDGE);

      //iPhone X with Portrait Mode (Mobile)
      configuration.addDeviceEmulation(DeviceName.iPhone_X, ScreenOrientation.PORTRAIT);

      eyes.setConfiguration(configuration);
      driver = await eyes.open(driver);

      await driver.url("https://demo.applitools.com/gridHackathonV2.html");

      await eyes.check("Cross-Device Elements Test", Target.window());

      await eyes.closeAsync();

    } finally {

      await eyes.abortIfNotClosed();
      await eyes.abort();
    }

  });
});