<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{shoping.length}})</div>
    </nav-bar>
  <cart-list></cart-list>
  </div>
</template>

<script>
import CartList from './childComps/CartList'

import NavBar from "components/common/navbar/NavBar";

import { mapActions, mapState } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapState(["shoping"]),
  },
  components: {
    NavBar,
    CartList
  },
};
</script>

<style lang="less" scoped>
#cart {
  .nav-bar {
    background-color: #ff8198;
    font-weight: 700;
    color: #fff;
  }
}
</style>