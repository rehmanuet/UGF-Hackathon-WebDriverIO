const Utils = require('../utils/utils.js')
var assert = require('assert')
describe(`Task 2 - ${process.env.VERSION} Traditional`, function()
{
  Utils.dataProvider2.forEach(function(testData)
  {
    it(`should filter black shoes correctly on ${browser.capabilities.browserName} with different viewports`,() =>
      {

        browser.setWindowRect(0, 0, testData.width, testData.height)
        browser.url('')

        if (!testData.device.includes("Laptop"))
        {
          $('#ti-filter').click()
          browser.pause("2000")
        }

        $('#colors__Black').click();
        $('#filterBtn').click()
        
        let results = $$('.grid_item').filter(function(item)
        {
          return item.isDisplayed();
        });

        assert.strictEqual(Utils.report.hackathonReporter(2,
          `${results.length} Items have been available after filtering black shoe displayed`,
          browser.capabilities.browserName, testData.width, testData.height, testData.device,
          '#colors__Black', results.length, 2), 2)
      });

    it(`should display Add to Favorites/Compare/Cart buttons on ${browser.capabilities.browserName} with different viewports`,() =>
      {
        if (testData.device.includes("Laptop"))
        {
          browser.execute(() =>{$("#product_1").mouseover();})
        }

        let is = $('#UL____222').isDisplayed();
        assert.strictEqual(Utils.report.hackathonReporter(2,
          `Add to Favorites/Compare/Cart buttons are displayed`, browser.capabilities
          .browserName, testData.width, testData.height, testData.device, '#UL____222', is, true
          ), true)
          
      });
  });
});