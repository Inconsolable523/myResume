(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Main javascript entry point
// Should handle bootstrapping/starting application
'use strict';

//import $ from 'jquery';

(function (doc) {
  // dom ready
  var bd = doc.createElement("script");
  bd.src = "//hm.baidu.com/hm.js?f940aae7b3f51d3eae76f0fe4ec1bf27";
  doc.body.appendChild(bd);

  console.log('😊 Welcome to ZhiChao\'s resume!');
  console.log('The resume source code is on https://github.com/wssgcg1213/resume');
})(document);

},{}]},{},[1])

//# sourceMappingURL=main.js.map
