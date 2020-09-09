"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mutationType = require("./mutation-type");

var _ADD_SHOPING$ADD_COUN;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_ADD_SHOPING$ADD_COUN = {}, _defineProperty(_ADD_SHOPING$ADD_COUN, _mutationType.ADD_SHOPING, function (state, _ref) {
  var shop = _ref.shop;
  // for (const item of state.shoping) {
  //     if (item.iid === shop.iid && item.style === shop.style && item.size === shop.size) {
  //         newshop = item
  //     }
  //     if (item.iid === shop.iid && (item.style !== shop.style || item.size !== shop.size)) {
  //         shops = item
  //     }
  //     if (item.iid === shop.iid) {
  //         newshop = item
  //     }
  // }
  // let newshop = state.shoping.find((item) => { item.iid === shop.iid && item.style === shop.style && item.size === shop.size })
  // let shops = state.shoping.find((item) => { item.iid === shop.iid && (item.style !== shop.style || item.size !== shop.size) })
  // if (newshop && shops) {
  //     newshop.count += shop.count
  //     console.log('id，颜色，样式都相同')
  // } else {
  //     state.shoping.shops.unshift(shop)
  //     console.log('id都相同')
  // }
  state.shoping.unshift(shop);
}), _defineProperty(_ADD_SHOPING$ADD_COUN, _mutationType.ADD_COUNT, function (state, _ref2) {
  var shop = _ref2.shop,
      oldshop = _ref2.oldshop;
  oldshop.count += shop.count;
}), _defineProperty(_ADD_SHOPING$ADD_COUN, _mutationType.SHOW_CHOOSE, function (state, isChooseshow) {
  state.isChooseshow = isChooseshow;
}), _defineProperty(_ADD_SHOPING$ADD_COUN, _mutationType.CHOOSE_CHECKED, function (state, _ref3) {
  var oldshop = _ref3.oldshop,
      check = _ref3.check;
  oldshop.checked = check;
}), _ADD_SHOPING$ADD_COUN);

exports["default"] = _default;