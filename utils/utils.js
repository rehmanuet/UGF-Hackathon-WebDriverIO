const fs = require('fs')

var dataProvider = [
    { width: 1200, height: 700, device: "Laptop", dom: "#UL____21", name: "Header Menu", expect: true },
    { width: 1200, height: 700, device: "Laptop", dom: "#DIV__customsear__41", name: "Search Bar", expect: true },
    { width: 1200, height: 700, device: "Laptop", dom: "#sidebar_filters", name: "Side Filter", expect: true },
    { width: 1200, height: 700, device: "Laptop", dom: "#A__wishlist__52", name: "Wishlist Icon", expect: true },
    { width: 1200, height: 700, device: "Laptop", dom: "[id^='I__tiviewgrid__20']", name: "Grid Icon", expect: true },
    { width: 1200, height: 700, device: "Laptop", dom: "[id^='I__tiviewlist__20']", name: "List Icon", expect: true },
    { width: 1200, height: 700, device: "Laptop", dom: "#A__cartbt__49 strong", name: "Cart Button Number", expect: true },
    { width: 1200, height: 700, device: "Laptop", dom: "#ti-filter", name: "Filter Button", expect: false },
    { width: 1200, height: 700, device: "Laptop", dom: "[id^='SPAN____20']", name: "Filter Text", expect: false },
    { width: 800, height: 700, device: "Tablet", dom: "#DIV__customsear__41", name: "Search Bar", expect: true },
    { width: 800, height: 700, device: "Tablet", dom: "#UL____269", name: "Product Icons", expect: true },
    { width: 800, height: 700, device: "Tablet", dom: "#ti-filter", name: "Filter Button", expect: true },
    { width: 800, height: 700, device: "Tablet", dom: "[id^='SPAN____20']", name: "Filter Text", expect: true },
    { width: 800, height: 700, device: "Tablet", dom: "#A__cartbt__49 strong", name: "Cart Button Number", expect: true },
    { width: 800, height: 700, device: "Tablet", dom: "#A__wishlist__52", name: "Wishlist Icon", expect: false },
    { width: 800, height: 700, device: "Tablet", dom: "[id^='I__tiviewgrid__20']", name: "View Grid Button", expect: false },
    { width: 800, height: 700, device: "Tablet", dom: "[id^='I__tiviewlist__20']", name: "View List Button", expect: false },
    { width: 500, height: 700, device: "Mobile", dom: ".btn_search_mob", name: "Mobile Search Button", expect: true },
    { width: 500, height: 700, device: "Mobile", dom: "#UL____269", name: "Add to Favt/Cart/Compare Icon", expect: true },
    { width: 500, height: 700, device: "Mobile", dom: "#ti-filter", name: "Filter Icon", expect: true },
    { width: 500, height: 700, device: "Mobile", dom: "#DIV__customsear__41", name: "Search Bar", expect: false },
    { width: 500, height: 700, device: "Mobile", dom: "#A__cartbt__49 strong", name: "Cart Button Number", expect: false },
    { width: 500, height: 700, device: "Mobile", dom: "[id^='DIV__collgcolmd__42'] .opened", name: "Footer's Quick Link uncollapsed", expect: false },
    { width: 500, height: 700, device: "Mobile", dom: "[id^='I__tiviewgrid__20']", name: "View Grid Button", expect: false },
    { width: 500, height: 700, device: "Mobile", dom: "[id^='I__tiviewlist__20']", name: "View List Button", expect: false },
    { width: 500, height: 700, device: "Mobile", dom: "#A__wishlist__52", name: "Wishlist Icon", expect: false },
];
var dataProvider2 = [
    { width: 1200, height: 700, device: "Laptop" },
    { width: 800, height: 700, device: "Tablet" },
    { width: 500, height: 700, device: "Mobile" },
  ];


  var dataProvider3 = [
//     { width: 1200, height: 700, device: "Laptop", dom: "#shoe_name", name: "Shoe Name", expect: true },
//     { width: 1200, height: 700, device: "Laptop", dom: "#shoe_img", name: "Shoe Image", expect: true },
//     { width: 1200, height: 700, device: "Laptop", dom: "[id^='EM__']", name: "Review Count Text", expect: true },
//     { width: 1200, height: 700, device: "Laptop", dom: "#SMALL____84", name: "Product ID", expect: true },
       { width: 1200, height: 700, device: "Laptop", dom: ".new_price", name: "New Price", expect: true },
       { width: 1200, height: 700, device: "Laptop", dom: ".old_price", name: "Old Price", expect: true },
       { width: 1200, height: 700, device: "Laptop", dom: ".old_price", name: "Discount", expect: true },
       { width: 1200, height: 700, device: "Laptop", dom: "btn_add_to_cart", name: "Add to Cart Button", expect: true },
       { width: 1200, height: 700, device: "Laptop", dom: ".numbers-row", name: "Quantity Box", expect: true },

];


var report = {

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
    dataProvider2,
    dataProvider3
};