var fs = require('fs');
var data;

try {
    //var data = fs.readFileSync('C://WORK//PaceDev//Sample//html_faqs15.html', 'utf8');
    var data = fs.readFileSync('C://WORK//PaceDev//Sample//splashscreentemplate.html', 'utf8');
} catch (error) {
    data = null;
}

const response = {"metadata": {
                    "content": data
                 }};
module.exports = response;