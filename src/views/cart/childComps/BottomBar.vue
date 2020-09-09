<!--  -->
<template>
  <div class="bottom-bar">
    <div class="bottom-conter">
      <check-button class="select-all" @checkBtnClick="checkClick" :checked="checked"></check-button>
      <span>全选</span>
    </div>
    <span class="total-price">合计:{{cartCount| fiex}}</span>
    <span class="buy-product" @click="toss">去计算({{cartList.length}})</span>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
import { mapGetters } from "vuex";

export default {
  name: "BottomBar",
  data() {
    return {};
  },

  components: {
    CheckButton,
  },

  computed: {
    ...mapGetters(["cartList", "cartCount"]),
    checked() {
      let nochecked = this.$store.state.shoping.find((item) => !item.checked);
      if (this.$store.state.shoping.length === 0) {
        return false;
      } else {
        return !nochecked;
      }
    },
  },

  methods: {
    checkClick() {
      let nochecked = this.$store.state.shoping.find((item) => !item.checked);
      if (nochecked) {
        this.$store.state.shoping.forEach((cartitem) => {
          let check = true;
          this.$store.dispatch("chooseChcek", { cartitem, check });
        });
      } else {
        this.$store.state.shoping.forEach((cartitem) => {
          let check = false;
          this.$store.dispatch("chooseChcek", { cartitem, check });
        });
      }
    },
    toss() {
      if (!this.cartList.length) {
        this.$toast.show("请选择商品");
      }
    },
  },
};
</script>
<style lang='less' scoped>
.bottom-bar {
  position: fixed;
  width: 100%;
  height: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 20px;
  box-sizing: border-box;
  display: flex;

  .bottom-conter {
    display: flex;
    align-items: center;
    .select-all {
      position: relative;
      line-height: 0;
    }
  }

  .total-price {
    flex: 1;
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }
  .buy-product {
    // position: relative;
    // right: -137px;
    // float: right;
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    // margin-left: 20%;
  }
}
</style>