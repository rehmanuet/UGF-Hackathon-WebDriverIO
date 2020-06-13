const Utils = require('../utils/utils.js')

var assert = require('assert')



describe(`Task 2 - ${process.env.VERSION} Traditional`, function () { 


  
  Utils.dataProvider3.forEach(function (testData) {

    it(`should filter black shoes correctly on ${browser.capabilities.browserName} with different viewports`, () => {
      browser.setTimeout({ 'script': 160000 })
      browser.setWindowRect(0, 0, testData.width, testData.height)
      browser.url('')

      if( !testData.device.includes("Laptop")){
        $('#ti-filter').click()
        browser.pause("2000")

      }

      $('#colors__Black').click();
      $('#filterBtn').click()

      var results = $$('.grid_item').filter(function (item) {
        return item.isDisplayed();
    });


    $("#product_1" ).click()

    let isDisplayed = $(testData.dom).isDisplayed()

    assert.strictEqual(
      Utils.report.hackathonReporter(1, `${testData.name} ${(testData.expect === true) ? 'is' : "isn't'"} displayed on ${browser.capabilities.browserName} browser`, browser.capabilities.browserName, testData.width, testData.height, testData.device, testData.dom, isDisplayed, testData.expect), testData.expect)
  });


 

    
    it(`should contain equal number of voted review stars as of written in review text`, () => {


   var voted_star = $$('[class="icon-star voted"]').filter(function (star) {
    return star.isDisplayed();
   });

      var review_text= $("em[id^='EM__']").getText()   // review_text = 4 Reviews  
      var review_str= review_text.split(" ")           // [4],[Reviews]
      var review_text_count= review_str[0]             // review_text_count = 4
     
      var compare = (voted_star.length == review_text_count)
 


    assert.strictEqual(
    Utils.report.hackathonReporter(3, `Review stars should be equal to mentions review text`, browser.capabilities.browserName, testData.width, testData.height, testData.device, '[class="icon-star voted"]', compare, true), true)

    });

    it(`It should contain the starts vote starts`, () => {


      let aa =$('.current')
    console.log(aa.getText())
       // assert.strictEqual(
       // Utils.report.hackathonReporter(2, `Add to Favorites/Compare/Cart buttons are displayed`, browser.capabilities.browserName, testData.width, testData.height, testData.device, '#UL____222', is, true), true)
   
       });
  });
});