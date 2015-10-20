(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var B = require('./b.js');

var A = {};
module.exports = A;

A.show = function () {
    console.log('----A show start----');
    B.show();
    console.log('----A show end ----');
};

A.showOther = function () {
    console.log('----show other----');
};


},{"./b.js":2}],2:[function(require,module,exports){
var A = require('./a.js');

var B = {};

B.show = function () {
    console.log('----B show start----');
    A.showOther();
    console.log('----B show end ----');
};

module.exports = B;
},{"./a.js":1}],3:[function(require,module,exports){
//var A = require('./case1/a.js');
//var A = require('./case2/a.js');
//var A = require('./case3/a.js');
//var A = require('./case4/a.js');
//var A = require('./case5/a.js');
var A = require('./case6/a.js');

window.Main = {
    show: function () {
        console.log("haha");
        A.show();
    }
};
},{"./case6/a.js":1}]},{},[3]);
