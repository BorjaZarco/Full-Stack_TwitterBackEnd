const fs = require('fs');
module.exports = function (path, object) {
    return fs.writeFile(__dirname+path, JSON.stringify(object), () => { });
}