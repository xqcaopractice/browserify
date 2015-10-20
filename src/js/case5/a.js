var A = {};
module.exports = A;

var B = require('./b.js');

A.show = function () {
    console.log('----A show start----');
    B.show();
    console.log('----A show end ----');
};

A.showOther = function () {
    console.log('----show other----');
};

