"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Vue from 'vue'
_vue["default"].filter('data-formt', function (value) {
  return (0, _moment["default"])(value).format('YYYY-MM-DD HH:mm:ss');
});

_vue["default"].filter('changeData', function (value) {
  var dat = new Date(value);
  return dat.getFullYear() + "-" + (dat.getMonth() - 1) + "-" + dat.getDay();
});

_vue["default"].filter('fiex', function (value) {
  return (value / 100).toFixed(2);
});