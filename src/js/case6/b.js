var A = require('./a.js');

var B = {};

B.show = function () {
    console.log('----B show start----');
    A.showOther();
    console.log('----B show end ----');
};

module.exports = B;