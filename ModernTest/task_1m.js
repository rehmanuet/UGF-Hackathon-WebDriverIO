var assert = require('assert')
const {
  By,
  Eyes,
  Target,
  Region,
  BatchInfo,
  DeviceName,
  BrowserType,
  Configuration,
  VisualGridRunner,
  ScreenOrientation
} = require('@applitools/eyes-webdriverio');
let eyes;


describe('Task 1 - Modern UFG Testing', function() {

  it('should verify the display of different element', async () => {
   
      //Initializes the UGF runner with max 10 instances
      const runner = new VisualGridRunner(10);
      eyes = new Eyes(runner);

      // Sets the necessary configuration
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

      await eyes.open(browser);

      await browser.url("https://demo.applitools.com/gridHackathonV2.html");
      // await browser.url('https://demo.applitools.com/gridHackathonV2.html');

      // Takes the Full ScreenShot
      await eyes.check("Cross-Device Elements Test", Target.window());

      await eyes.closeAsync();
  });
});