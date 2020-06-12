
const Utils = require('../utils/utils.js')

var assert = require('assert')

describe(`Task 2 - ${process.env.VERSION} Traditional`, function () {

 
  Utils.dataProvider2.forEach(function (testData) {


    it(`should filter black shoes correctly on ${testData.device} devices`, () => {
      browser.setTimeout({ 'script': 160000 })
      browser.setWindowRect(0, 0, testData.width, testData.height)
      browser.url('')

  
      if( !testData.device.includes("Laptop")){
        $('#ti-filter').click()
      }

      $('#colors__Black').click();
      $('#filterBtn').click()

      var results = $$('.grid_item').filter(function (item) {
        return item.isDisplayed();
    });
  
      assert.strictEqual(
        Utils.report.hackathonReporter(2, `${results.length} Items have been available after filtering black shoe displayed`, browser.capabilities.browserName, testData.width, testData.height, testData.device, '#colors__Black', results.length, 2), 2)
    });
  });
});
