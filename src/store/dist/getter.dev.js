"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  cartList: function cartList(state) {
    return state.shoping.filter(function (item) {
      return item.checked;
    });
  },
  cartCount: function cartCount(state, getters) {
    return getters.cartList.reduce(function (preValue, item) {
      return preValue + item.count * item.newPrice;
    }, 0);
  }
};
exports["default"] = _default;