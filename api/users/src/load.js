const fs = require('fs');

module.exports = function (path) {
    return JSON.parse(fs.readFileSync((__dirname+path)).toString());
}