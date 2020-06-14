const Utils = require('../helper/utils.js')
var assert = require('assert')

describe(`Task 3 - ${process.env.VERSION} Traditional`, function() {

  Utils.dataProvider2.forEach(function(testData) {

    it(`Verify Product Details of first black shoes on ${browser.capabilities.browserName} browser with viewport ${testData.width}x${testData.height}`,() => {
      
        browser.setWindowRect(0, 0, testData.width, testData.height);

        browser.url('');

        if (!testData.device.includes("Laptop")) {
          $('#ti-filter').click();
          browser.pause("2000");
        }

        $('#colors__Black').click();

        $('#filterBtn').click();

        let results = $$('.grid_item').filter(function(item) {
          return item.isDisplayed();
        });

        $("#product_1").click();

        let voted_star = $$('[class="icon-star voted"]').filter(function(star) {
          return star.isDisplayed();
        });

        let review_text = $("em[id^='EM__']").getText(); // review_text = 4 Reviews  

        let review_str = review_text.split(" ");         // [4],[Reviews]

        let review_text_count = review_str[0];           // review_text_count = 4

        let compare = (voted_star.length == review_text_count);

        Utils.report.hackathonReporter(3, `Review stars count should be equal to count mentioned in review text`, browser.capabilities.browserName,
          testData.width, testData.height, testData.device, '[class="icon-star voted"]', compare, true);

        let size = $('.current').getText();

        let size_compare = (size == 'Small (S)');
 
        Utils.report.hackathonReporter(3, `Small (S) should be the default selected size`, browser.capabilities.browserName, testData.width, testData
          .height, testData.device, '.current', size_compare, true);
 
        let new_price = $('.new_price').getText();
  
        let new_price_compare = (size == '$33.00');
  
        Utils.report.hackathonReporter(3, `'$33.00 should be new price of first black shoes`, browser.capabilities.browserName, testData.width,
          testData.height, testData.device, '.current', size_compare, true);
        
        let old_price = $('.old_price').getText();
        
        let old_price_compare = (size == '$48.00');
        
        Utils.report.hackathonReporter(3, `'$48.00 should be old price of first black shoes`, browser.capabilities.browserName, testData.width,
          testData.height, testData.device, '.current', size_compare, true);
        
        let product_id = $('#SMALL____84').isDisplayed();
        
          Utils.report.hackathonReporter(3, `'Product ID should be displayed`, browser.capabilities.browserName, testData.width, testData.height,
          testData.device, '.current', product_id, true);

      });
  });
});