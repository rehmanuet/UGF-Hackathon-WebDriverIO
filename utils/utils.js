const fs = require('fs');


class FileUtils {

    hackathonReporter(task, testName, browsers, viewportw,viewporth,device,domId ,comparisonResult) {
        fs.appendFileSync('Traditional-V1-TestResults.txt', `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browsers}, Viewport: ${viewportw}x${viewporth}, Device: ${device}, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`);
        return comparisonResult;
    }
}



module.exports = new FileUtils();