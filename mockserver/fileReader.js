var fs = require('fs');
var data = [];

try {
    //var data = fs.readFileSync('C://WORK//PaceDev//Sample//html_faqs15.html', 'utf8');
    var testFolder = 'C://WORK//PaceDev//Sample//';
    fs.readdirSync(testFolder).forEach(
        file => {
            var fileData = fs.readFileSync(testFolder + file, 'utf8');
            data.push({
                "content": fileData
            });
        });
} catch (error) {
    data = null;
}

console.log("Directory Access:", data.length + " file content/s retrieved.");
const response = {"metadata": data};
module.exports = response;