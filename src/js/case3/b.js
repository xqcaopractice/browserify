var C = require('./c.js');

var B = {};

B.show = function () {
    console.log('----B show start----');
    C.show();
    console.log('----B show end ----');
};

B.showOther = function () {
    console.log('----B show other----');
};

module.exports = B;