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

describe(`Task 3 - Modern UFG Testing`, function() {


  it(`should navigate first black shoe details page and verify the product details. `, async function() {

    //Initializes the UGF runner with max 10 instances
    const runner = new VisualGridRunner(10);
    eyes = new Eyes(runner);

    // Sets the necessary configuration
    const configuration = new Configuration();
    configuration.setApiKey("RhAPSyd7qQndu110jqybVopu4hF9w3KxBru4wQYU8Fwyg110");
    configuration.setBatch("UFG Hackathon")
    configuration.setAppName('Applitools Hackathon 2020');
    configuration.setTestName('Task 3');
    configuration.setForceFullPageScreenshot(true);
    configuration.setMatchLevel("Content");
    
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
    // await browser.url('https://demo.applitools.com/gridHackathonV1.html');
    await browser.url('https://demo.applitools.com/gridHackathonV2.html');


    const color_black = await browser.$('#colors__Black');
    await color_black.click();

    const filter_button = await browser.$('#filterBtn');
    await filter_button.click();

    const product_1 = await browser.$("#product_1");
    await product_1.click();

    // Takes the Screenshot of selected regions only for Visual Testing
    await eyes.check('Product Details test', Target.window());

    await eyes.closeAsync();
  });
});