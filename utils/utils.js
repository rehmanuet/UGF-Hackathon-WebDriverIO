const fs = require('fs');
const browsers = "Firefox";
const viewport = "1200x700";
const device = "Laptop";


class FileUtils {

    hackathonReporter(task, testName, domId, comparisonResult) {
        fs.appendFileSync('Traditional-V1-TestResults.txt', `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browsers}, Viewport: ${viewport}, Device: ${device}, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`);
        return comparisonResult;
    }
}



module.exports = new FileUtils();