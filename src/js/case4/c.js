var A = require('./a.js');
var B = require('./b.js');

var C = {};

C.show = function () {
    console.log('----C show start----');
    A.showOther();
    console.log('----C show middle----');
    B.showOther();
    console.log('----C show end ----');
};

module.exports = C;