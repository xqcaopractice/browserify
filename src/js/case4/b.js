var C = require('./c.js');

module.exports.show = function () {
    console.log('----B show start----');
    C.show();
    console.log('----B show end ----');
};

module.exports.showOther = function () {
    console.log('----B show other----');
};