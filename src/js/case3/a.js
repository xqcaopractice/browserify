var B = require('./b.js');

var A = {};

A.show = function () {
    console.log('----A show start----');
    B.show();
    console.log('----A show end ----');
};

A.showOther = function () {
    console.log('----A show other----');
};

module.exports = A;