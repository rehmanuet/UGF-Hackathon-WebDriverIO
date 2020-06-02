
const Utils = require('../utils/utils.js')

var assert = require('assert')

describe(`Task 1 - ${process.env.VERSION} Traditional`, function () {

  Utils.dataProvider.forEach(function (testData) {

    it(`${testData.name} ${(testData.expect === true) ? 'should' : "shouldn't"} be displayed on ${testData.device} devices`, () => {
      browser.setTimeout({ 'script': 160000 })
      browser.setWindowRect(0, 0, testData.width, testData.height)
      browser.url('')
      let isDisplayed = $(testData.dom).isDisplayed()
      assert.strictEqual(
        Utils.report.hackathonReporter(1, `${testData.name} ${(testData.expect === true) ? 'is' : "isn't'"} displayed on ${browser.capabilities.browserName} browser`, browser.capabilities.browserName, testData.width, testData.height, testData.device, testData.dom, isDisplayed, testData.expect), testData.expect)
    });
  });
});
