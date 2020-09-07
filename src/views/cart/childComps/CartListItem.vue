<!--  -->
<template>
  <div class="list-item">
    <div class="shopname">
      <!-- <CheckButton></CheckButton> -->
      {{cartItem.shopname}}
    </div>
    <div class="item-conter">
      <CheckButton class="item-check" @checkBtnClick="checkedChange" v-model="cartItem.checked"></CheckButton>
      <div class="cart-img">
        <img :src="cartItem.imgURL" alt />
      </div>
      <div class="cart-item">
        <div class="cart-title">{{cartItem.title}}</div>
        <div class="cart-size">{{cartItem.style}};{{cartItem.size}}</div>
        <div class="cart-botten">
          <div class="cart-price">￥{{cartItem.newPrice|fiex}}</div>
          <div class="cart-count">X{{cartItem.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
export default {
  name: "CartListItem",
  props: ["cartItem"],
  data() {
    return {};
  },

  components: {
    CheckButton,
  },

  computed: {},

  methods: {
    checkedChange() {
        console.log(111)
      this.cartItem.checked = !this.cartItem.checked;
    },
  },
};
</script>
<style lang='less' scoped>
.list-item {
  padding: 10px 10px;
  border-bottom: 2px solid #ccc;
  .shopname {
    display: flex;
    padding: 5px 0 10px;
  }
  .item-conter {
    display: flex;
    align-items: center;
    .item-check {
      margin: 0 10px 0 0;
    }
    .cart-img {
      img {
        width: 70px;
      }
    }
    .cart-item {
      font-size: 17px;
      color: #333;
      padding: 5px 10px;
      position: relative;
      overflow: hidden;
      .cart-title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .cart-size {
        font-size: 14px;
        color: #666;
        margin-top: 15px;
      }
      .cart-botten {
        margin-top: 15px;
        color: orangered;
        .cart-count {
          position: relative;
          top: -17px;
          right: -220px;
        }
      }
    }
  }
}
</style>