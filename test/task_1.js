
const Utils = require('../utils/utils.js')

var assert = require('assert')

describe('Task 1 - Version 1 Traditional', function (){

  Utils.dataProvider.forEach(function (testData) {

    it(`${testData.name} should be displayed on ${testData.device} devices`, () => {
      browser.setTimeout({ 'script': 160000 })
      browser.setWindowRect(0, 0, testData.width, testData.height)
      browser.url('')

      let isDisplayed = $(testData.dom).isDisplayed()
      assert.strictEqual(Utils.report.hackathonReporter(1, `${testData.name} is displayed on ${browser.capabilities.browserName} browser`, browser.capabilities.browserName, testData.width, testData.height, testData.device, testData.dom, isDisplayed), true)
    });
  });
});
