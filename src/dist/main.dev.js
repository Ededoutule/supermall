"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

require("./filter/Data");

var _vueLazyload = _interopRequireDefault(require("vue-lazyload"));

var _fastclick = _interopRequireDefault(require("fastclick"));

var _index = _interopRequireDefault(require("components/common/toast/index"));

var _vant = _interopRequireDefault(require("vant"));

require("vant/lib/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;

_fastclick["default"].attach(document.body);

_vue["default"].use(_vueLazyload["default"], {
  loading: require('assets/img/common/placeholder.png')
});

_vue["default"].use(_index["default"]);

_vue["default"].use(_vant["default"]);

_vue["default"].prototype.$bus = new _vue["default"]();
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');