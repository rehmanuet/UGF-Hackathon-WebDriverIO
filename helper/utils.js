const fs = require('fs')

// Provides the different sets of data for task1
var dataProvider = [
    { width: 1200, height: 700, device: "Laptop", dom: "#UL____21", name: "Header Menu", isDisplayed: true },
    { width: 1200, height: 700, device: "Laptop", dom: "#DIV__customsear__41", name: "Search Bar", isDisplayed: true },
    { width: 1200, height: 700, device: "Laptop", dom: "#sidebar_filters", name: "Side Filter", isDisplayed: true },
    { width: 1200, height: 700, device: "Laptop", dom: "#A__wishlist__52", name: "Wishlist Icon", isDisplayed: true },
    { width: 1200, height: 700, device: "Laptop", dom: "[id^='I__tiviewgrid__20']", name: "Grid Icon", isDisplayed: true },
    { width: 1200, height: 700, device: "Laptop", dom: "[id^='I__tiviewlist__20']", name: "List Icon", isDisplayed: true },
    { width: 1200, height: 700, device: "Laptop", dom: "#A__cartbt__49 strong", name: "Cart Button Number", isDisplayed: true },
    { width: 1200, height: 700, device: "Laptop", dom: "#ti-filter", name: "Filter Button", isDisplayed: false },
    { width: 1200, height: 700, device: "Laptop", dom: "[id^='SPAN____20']", name: "Filter Text", isDisplayed: false },
    { width: 800, height: 700, device: "Tablet", dom: "#DIV__customsear__41", name: "Search Bar", isDisplayed: true },
    { width: 800, height: 700, device: "Tablet", dom: "#UL____269", name: "Product Icons", isDisplayed: true },
    { width: 800, height: 700, device: "Tablet", dom: "#ti-filter", name: "Filter Button", isDisplayed: true },
    { width: 800, height: 700, device: "Tablet", dom: "[id^='SPAN____20']", name: "Filter Text", isDisplayed: true },
    { width: 800, height: 700, device: "Tablet", dom: "#A__cartbt__49 strong", name: "Cart Button Number", isDisplayed: true },
    { width: 800, height: 700, device: "Tablet", dom: "#A__wishlist__52", name: "Wishlist Icon", isDisplayed: false },
    { width: 800, height: 700, device: "Tablet", dom: "[id^='I__tiviewgrid__20']", name: "View Grid Button", isDisplayed: false },
    { width: 800, height: 700, device: "Tablet", dom: "[id^='I__tiviewlist__20']", name: "View List Button", isDisplayed: false },
    { width: 500, height: 700, device: "Mobile", dom: ".btn_search_mob", name: "Mobile Search Button", isDisplayed: true },
    { width: 500, height: 700, device: "Mobile", dom: "#UL____269", name: "Add to Favt/Cart/Compare Icon", isDisplayed: true },
    { width: 500, height: 700, device: "Mobile", dom: "#ti-filter", name: "Filter Icon", isDisplayed: true },
    { width: 500, height: 700, device: "Mobile", dom: "#DIV__customsear__41", name: "Search Bar", isDisplayed: false },
    { width: 500, height: 700, device: "Mobile", dom: "#A__cartbt__49 strong", name: "Cart Button Number", isDisplayed: false },
    { width: 500, height: 700, device: "Mobile", dom: "[id^='DIV__collgcolmd__42'] .opened", name: "Footer's Quick Link uncollapsed", isDisplayed: false },
    { width: 500, height: 700, device: "Mobile", dom: "[id^='I__tiviewgrid__20']", name: "View Grid Button", isDisplayed: false },
    { width: 500, height: 700, device: "Mobile", dom: "[id^='I__tiviewlist__20']", name: "View List Button", isDisplayed: false },
    { width: 500, height: 700, device: "Mobile", dom: "#A__wishlist__52", name: "Wishlist Icon", isDisplayed: false },
];

// Provides the different set of data for task1
var dataProvider2 = [
    { width: 1200, height: 700, device: "Laptop" },
    { width: 800, height: 700, device: "Tablet" },
    { width: 500, height: 700, device: "Mobile" },
  ];



var report = {

  /**
     * @param task Number of task 
     * @param testName  Name of the task
     * @param browsers Name of browser on which test runs
     * @param viewportw Width of browser's window
     * @param viewporth Height of borwser's window
     * @param device Type of device eg. Laptop/Tablet/Mobile
     * @param domId Element locator
     * @param comparisonResult Assertion result
     * @param expectedResult Expected result of the test case
     */

    hackathonReporter(task, testName, browsers, viewportw, viewporth, device, domId, comparisonResult, expectedResult) {
        if (process.env.VERSION.trim() == 'V1') {
            fs.appendFileSync('Traditional-V1-TestResults.txt', `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browsers}, Viewport: ${viewportw}x${viewporth}, Device: ${device}, Status: ${(comparisonResult === expectedResult ? "Pass" : "Fail")}\n`);
        } else {
            fs.appendFileSync('Traditional-V2-TestResults.txt', `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browsers}, Viewport: ${viewportw}x${viewporth}, Device: ${device}, Status: ${(comparisonResult === expectedResult ? "Pass" : "Fail")}\n`);
        }
        return comparisonResult
    }
}

module.exports = {
    report,
    dataProvider,
    dataProvider2};