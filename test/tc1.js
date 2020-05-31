
const Utils = require('../utils/utils.js');




var assert = require('assert') 

describe('Task 1 - Header location', function() {

    var testdata = [{"width":1200,"height":700,"device":"Laptop"},
                    {"width":800,"height":700,"device":"Tablet"},
                    {"width":500,"height":700,"device":"Mobile"}];

  testdata.forEach(function(viewport) {

      // beforeEach(function() {
      
      //   browser.setWindowRect(0, 0, viewport['width'], viewport['height'])
      //   console.log(viewport['width'], viewport['height'])
      //   browser.url('https://demo.applitools.com/gridHackathonV1.html');
      // });
    
    it('Search field should be displayed',  () => {
      browser.setTimeout({ 'script': 160000 })
      browser.setWindowRect(0, 0, viewport['width'], viewport['height'])
        console.log(viewport['width'], viewport['height'])
        browser.url('https://demo.applitools.com/gridHackathonV1.html');
        browser.refresh()
      console.log( browser.capabilities.browserName)
      let SearchBar = $('#DIV__customsear__41').isDisplayedInViewport();
      console.log( browser.capabilities.browserName)
      console.log( viewport['device'])
      console.log("Search Bar_ IsDisplaced= "+SearchBar);
      console.log("______________________________")

      assert.equal(Utils.hackathonReporter(1, "Search field is displayed", browser.capabilities.browserName,viewport['width'],viewport['height'],viewport['device'], 'DIV__customsear__41', SearchBar),true);
  
    });
    it('Wishlist Icon should be displayed', () => {
      browser.setWindowRect(0, 0, viewport['width'], viewport['height'])
      console.log(viewport['width'], viewport['height'])
      browser.url('https://demo.applitools.com/gridHackathonV1.html');
      browser.refresh()

        let isDisplayedInViewport = $('#A__wishlist__52').isDisplayedInViewport();
        console.log( browser.capabilities.browserName)
        console.log( viewport['device'])
        console.log("Wishlist= "+isDisplayedInViewport);
        console.log("______________________________")

        assert.equal(Utils.hackathonReporter(1, "Wish List should be displayed", browser.capabilities.browserName,viewport['width'],viewport['height'],viewport['device'], '#A__wishlist__52', isDisplayedInViewport),true);
});
it('Categories should be displayed', () => {
  browser.setWindowRect(0, 0, viewport['width'], viewport['height'])
  console.log(viewport['width'], viewport['height'])
  browser.url('https://demo.applitools.com/gridHackathonV1.html');
  browser.refresh()

  let categories = $('#UL____21').isDisplayedInViewport();
  console.log("______________________________")
  console.log( browser.capabilities.browserName)
  console.log( viewport['device'])
  console.log("Categories= "+categories);


  assert.equal(Utils.hackathonReporter(1, "Categories should be displayed", browser.capabilities.browserName,viewport['width'],viewport['height'],viewport['device'], '#UL____21', categories),true);
});
});
});