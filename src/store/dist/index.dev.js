"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _action = _interopRequireDefault(require("./action"));

var _getter = _interopRequireDefault(require("./getter"));

var _state = _interopRequireDefault(require("./state"));

var _mutation = _interopRequireDefault(require("./mutation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: _state["default"],
  getters: _getter["default"],
  mutations: _mutation["default"],
  actions: _action["default"]
});

exports["default"] = _default;