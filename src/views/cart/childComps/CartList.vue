<!--  -->
<template>
  <div id="cart-list">
    <scroll
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      :pull-down="true"
      class="content"
      :datas="[222]"
    >
      <div v-for="(cartItem,index) in shoping" :key="index">
        <cart-list-item :cart-item="cartItem"></cart-list-item>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import CartListItem from "./CartListItem";

import { mapState } from "vuex";
export default {
  name: "CartList",
  data() {
    return {};
  },

  components: {
    CartListItem,
    Scroll,
  },

  computed: {
    ...mapState(["shoping"]),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  methods: {},
};
</script>
<style lang='less' scoped>
#cart-list {
  height: calc(100% - 93px - 49px);
  .content {
    height: 100%;
    overflow: hidden;
  }
}
</style>