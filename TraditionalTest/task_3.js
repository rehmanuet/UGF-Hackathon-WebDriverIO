const Utils = require('../helper/utils.js')
var assert = require('assert')

describe(`Task 3 - ${process.env.VERSION} Traditional`, function() {

      /**
     * Gets the data from ./helper/utils.js's dataProvider2 object and provide to test cases for cross-browser
     * browser testing with multiple viewports
     * @param {Array.Object} testData Data Provider object from ./helper/utils.js
     */

  Utils.dataProvider2.forEach(function(testData) {

    /**
     * @param testData.width Width of browser's window eg. 1200
     * @param testData.height Height of browser's window. eg. 700
     * @param testData.device Name of the device eg. Laptop
     * @param browser.capabilities.browserName Name of the browser on which test is executed
     */

    it(`Verify Product Details of first black shoes on ${browser.capabilities.browserName} browser with viewport ${testData.width}x${testData.height}`,() => {
      
        // Sets the Width and Hieght
        browser.setWindowRect(0, 0, testData.width, testData.height);

        // Gets the URI directly from wdio.conf.js via process.env.VERSION
        browser.url('');

        // If device is not Laptop, Then click Filter icon that'll be showed-up only in Tablet & Mobile devices only
        if (!testData.device.includes("Laptop")) {
          $('#ti-filter').click();
          browser.pause("2000");
        }

        $('#colors__Black').click();
        $('#filterBtn').click();

        // Gets all the product after filteration i.e 2 Black Shoe and check for their visiblity
        let results = $$('.grid_item').filter(function(item) {
          return item.isDisplayed();
        });

        $("#product_1").click();

        // Iterates over the Rating stars to check their visibility and get count
        let voted_star = $$('[class="icon-star voted"]').filter(function(star) {
          return star.isDisplayed();
        });

        let review_text = $("em[id^='EM__']").getText(); // review_text = 4 Reviews  
        let review_str = review_text.split(" ");         // [4],[Reviews]
        let review_text_count = review_str[0];           // review_text_count = 4

        // Compares the Rating stars count with the count parsed from Review text
        let compare = (voted_star.length == review_text_count);

        Utils.report.hackathonReporter(3, `Review stars count should be equal to count mentioned in review text`, browser.capabilities.browserName,
          testData.width, testData.height, testData.device, '[class="icon-star voted"]', compare, true);

        // Gets the default size from Size Box and compares with "Small (S)"
        let size = $('.current').getText();
        let size_compare = (size == 'Small (S)');
 
        Utils.report.hackathonReporter(3, `Small (S) should be the default selected size`, browser.capabilities.browserName, testData.width, testData
          .height, testData.device, '.current', size_compare, true);
 
        // Gets the new price and compares with "$33.00"
        let new_price = $('.new_price').getText();
        let new_price_compare = (size == '$33.00');
  
        Utils.report.hackathonReporter(3, `'$33.00 should be new price of first black shoes`, browser.capabilities.browserName, testData.width,
          testData.height, testData.device, '.current', size_compare, true);
        
        // Gets the old price and compares with "$48.00"
        let old_price = $('.old_price').getText();
        let old_price_compare = (size == '$48.00');
        
        Utils.report.hackathonReporter(3, `'$48.00 should be old price of first black shoes`, browser.capabilities.browserName, testData.width,
          testData.height, testData.device, '.current', size_compare, true);
        
        // Verifies the Product ID is displayed
        let product_id = $('#SMALL____84').isDisplayed();
        
          Utils.report.hackathonReporter(3, `'Product ID should be displayed`, browser.capabilities.browserName, testData.width, testData.height,
          testData.device, '.current', product_id, true);

      });
  });
});