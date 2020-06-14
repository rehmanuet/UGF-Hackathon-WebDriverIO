const Utils = require('../helper/utils.js')
var assert = require('assert')

describe(`Task 1 - ${process.env.VERSION} Traditional`, function()
{

    /**
     * Gets the data from ./helper/utils.js and provide to test cases for cross-browser
     * browser testing with multiple viewports
     * @param {Array.Object} testData Data Provider object from ./helper/utils.js
     */

  Utils.dataProvider.forEach(function(testData)
  {

    /**
     * @param testData.width Width of browser's window eg. 1200
     * @param testData.height Height of browser's window. eg. 700
     * @param testData.device Name of the device eg. Laptop
     * @param testData.dom DOM Locator eg. #DIV__customsear__41
     * @param testData.name Name of the Locator eg. Search Bar
     * @param testData.isDisplayed Boolean value eg. true= Should be displayed, false: Shouldn't be displayed
     * @param browser.capabilities.browserName Name of the browser on which test is executed
     */

    it(`${testData.name} ${(testData.isDisplayed === true) ? 'should' : "shouldn't"} be displayed on ${testData.device} devices`,() =>
      {

        // Sets the Width and Hieght
        browser.setWindowRect(0, 0, testData.width, testData.height)

        // Gets the URI directly from wdio.conf.js
        browser.url('')

        let isVisible = $(testData.dom).isDisplayed()

        // Assertion of the outpus and HackathonReporter for test result reporting
        assert.strictEqual(Utils.report.hackathonReporter(1,
          `${testData.name} ${(testData.isDisplayed === true) ? 'is' : "isn't'"} displayed on ${browser.capabilities.browserName} browser`,
          browser.capabilities.browserName, testData.width, testData.height, testData.device,
          testData.dom, isVisible, testData.isDisplayed), testData.isDisplayed)
      });
  });
});