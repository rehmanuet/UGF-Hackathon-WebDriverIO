
const Utils = require('../utils/utils.js');




var assert = require('assert') 

describe('Task 1 - Header location', function() {
    beforeEach(function() {
        // browser.setTimeout({
        //     'implicit': 5000
        // });
        browser.setWindowRect(0, 0, 375, 500)
        browser.url('https://demo.applitools.com/gridHackathonV1.html');
      });
    
    it('Search field should be displayed',  () => {

    // let SearchBar = $('#DIV__customsear__41').isDisplayedInViewport();
    // console.log("Search Bar= "+SearchBar); 
    console.log( browser.capabilities.browserName)
      let SearchBar_ISDISOLAYED = $('#DIV__customsear__41').isDisplayed();
      console.log("Search Bar_ IsDisplaced= "+SearchBar_ISDISOLAYED); 
      assert.equal(Utils.hackathonReporter(1, "Search field is displayed", browser.capabilities.browserName, 'DIV__customsear__41', SearchBar_ISDISOLAYED),true);
  
    });
    it('Wishlist Icon should be displayed', () => {

        let isDisplayedInViewport = $('#A__wishlist__52').isDisplayed();
        console.log("Wishlist= "+isDisplayedInViewport);
        assert.equal(Utils.hackathonReporter(1, "Wish List should be displayed", browser.capabilities.browserName, '#A__wishlist__52', isDisplayedInViewport),true);
});
it('Categories should be displayed', () => {

  let categories = $('#UL____21').isDisplayed();
  console.log("Categories= "+categories);
  assert.equal(Utils.hackathonReporter(1, "Categories should be displayed", browser.capabilities.browserName, '#NAV__colxlcollg__10', categories),true);
});

});