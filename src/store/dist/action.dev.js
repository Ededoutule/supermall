"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mutationType = require("./mutation-type");

var _default = {
  addshoping: function addshoping(_ref, shop) {
    var state = _ref.state,
        commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      var oldshop = state.shoping.find(function (item) {
        return item.iid === shop.iid;
      });

      if (oldshop) {
        commit(_mutationType.ADD_COUNT, {
          oldshop: oldshop,
          shop: shop
        });
      } else {
        shop.checked = false;
        commit(_mutationType.ADD_SHOPING, {
          shop: shop
        });
      }

      resolve('添加购物车成功');
    });
  },
  showchoose: function showchoose(_ref2, isChooseshow) {
    var commit = _ref2.commit;
    commit(_mutationType.SHOW_CHOOSE, isChooseshow);
  },
  chooseChcek: function chooseChcek(_ref3, _ref4) {
    var state = _ref3.state,
        commit = _ref3.commit;
    var cartitem = _ref4.cartitem,
        check = _ref4.check;
    var oldshop = state.shoping.find(function (item) {
      return item.iid === cartitem.iid;
    });
    commit(_mutationType.CHOOSE_CHECKED, {
      oldshop: oldshop,
      check: check
    });
  }
};
exports["default"] = _default;