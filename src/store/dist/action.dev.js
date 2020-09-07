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
  },
  showchoose: function showchoose(_ref2, isChooseshow) {
    var commit = _ref2.commit;
    commit(_mutationType.SHOW_CHOOSE, isChooseshow);
  }
};
exports["default"] = _default;