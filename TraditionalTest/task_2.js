const Utils = require('../helper/utils.js')
var assert = require('assert')

describe(`Task 2 - ${process.env.VERSION} Traditional`, function()
{
    /**
     * Gets the data from ./helper/utils.js's dataProvider2 object and provide to test cases for cross-browser
     * browser testing with multiple viewports
     * @param {Array.Object} testData Data Provider object from ./helper/utils.js
     */

  Utils.dataProvider2.forEach(function(testData)
  {
    /**
     * @param testData.width Width of browser's window eg. 1200
     * @param testData.height Height of browser's window. eg. 700
     * @param testData.device Name of the device eg. Laptop
     * @param browser.capabilities.browserName Name of the browser on which test is executed
     */

    it(`should filter black shoes correctly on ${browser.capabilities.browserName} with different ${testData.device} device`,() =>
      {

        // Sets the Width and Height
        browser.setWindowRect(0, 0, testData.width, testData.height)

        // Gets the URI directly from wdio.conf.js via process.env.VERSION
        browser.url('')

        // If device is not Laptop, Then click Filter icon that'll be showed-up only in Tablet & Mobile devices only
        if (!testData.device.includes("Laptop"))
        {
          $('#ti-filter').click()
          browser.pause("2000")
        }

        $('#colors__Black').click();
        $('#filterBtn').click()
        
        // Gets all the product after filteration i.e 2 Black Shoe and check for their visiblity
        let results = $$('.grid_item').filter(function(item)
        {
          return item.isDisplayed();
        });

        // Assertion of the output and HackathonReporter for test result reporting
        assert.strictEqual(Utils.report.hackathonReporter(2,
          `${results.length} Items have been available after filtering black shoe displayed`,
          browser.capabilities.browserName, testData.width, testData.height, testData.device,
          '#colors__Black', results.length, 2), 2)
      });

    it(`should display Add to Favorites/Compare/Cart buttons on ${browser.capabilities.browserName} with different ${testData.device} device`,() =>
      {
        
        // If device is Laptop, Then hover over first product to verify Add to Favorites/Compare/Cart buttons visibilty
        if (testData.device.includes("Laptop"))
        {
          browser.execute(() =>{$("#product_1").mouseover();})
        }

        // CHecks the Add to Favorites/Compare/Cart buttons visibility
        let is = $('#UL____222').isDisplayed();

        // Assertion of the output and HackathonReporter for test result reporting
        assert.strictEqual(Utils.report.hackathonReporter(2,
          `Add to Favorites/Compare/Cart buttons are displayed`, browser.capabilities
          .browserName, testData.width, testData.height, testData.device, '#UL____222', is, true
          ), true)
          
      });
  });
});