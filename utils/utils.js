const fs = require('fs')

var dataProvider = [
    { width: 1200, height: 700, device: "Laptop", dom: "#UL____21", name: "Header Menu" },
    { width: 1200, height: 700, device: "Laptop", dom: "#DIV__customsear__41", name: "Search Bar" },
    { width: 1200, height: 700, device: "Laptop", dom: "#ASIDE__collg__67", name: "Side Filter" },
    { width: 1200, height: 700, device: "Laptop", dom: "#A__wishlist__52", name: "Wishlist Icon" },
    { width: 1200, height: 700, device: "Laptop", dom: "#I__tiviewgrid__202", name: "Grid Icon" },
    { width: 1200, height: 700, device: "Laptop", dom: "#A____203", name: "List Icon" },
    { width: 800, height: 700, device: "Tablet", dom: "#DIV__customsear__41", name: "Search Bar" },
    { width: 800, height: 700, device: "Tablet", dom: "#UL____269", name: "Product Icons" },
    { width: 800, height: 700, device: "Tablet", dom: "#ti-filter", name: "Filter Icon" },
    { width: 800, height: 700, device: "Tablet", dom: "#SPAN____208", name: "Filter Text" },
    { width: 500, height: 700, device: "Mobile", dom: "#UL____269", name: "Product Icons" },
    { width: 500, height: 700, device: "Mobile", dom: "#ti-filter", name: "Filter Icon" }
];
var report = {

    hackathonReporter(task, testName, browsers, viewportw, viewporth, device, domId, comparisonResult) {
        if (process.env.VERSION) {
            fs.appendFileSync('Traditional-V2-TestResults.txt', `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browsers}, Viewport: ${viewportw}x${viewporth}, Device: ${device}, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`);
        } else {
            fs.appendFileSync('Traditional-V1-TestResults.txt', `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browsers}, Viewport: ${viewportw}x${viewporth}, Device: ${device}, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`);
        }
        return comparisonResult;
    }
}

module.exports = {
    report,
    dataProvider
};