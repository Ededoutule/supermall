<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{shoping.length}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import CartList from "./childComps/CartList";
import BottomBar from "./childComps/BottomBar";

import NavBar from "components/common/navbar/NavBar";

import { mapActions, mapState } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapState(["shoping"]),
  },
  components: {
    NavBar,
    CartList,
    BottomBar,
  },
};
</script>

<style lang="less" scoped>
#cart {
  height: 100vh;
  .nav-bar {
    background-color: #ff8198;
    font-weight: 700;
    color: #fff;
    position: relative;
    z-index: 9;
  }
}
</style>