var B = require('./b.js');

module.exports.show = function () {
    console.log('----A show start----');
    B.show();
    console.log('----A show end ----');
};

module.exports.showOther = function () {
    console.log('----show other----');
};