<template>
  <div class="shop-info">
    <div class="info-logo">
      <img :src="shop.logo" alt />
      <span>{{shop.name}}</span>
    </div>
    <div class="info-content">
      <div class="left-content">
        <div class="info-sells">{{shop.sells}}</div>
        <div class="info-goods">{{shop.goodsCount}}</div>
      </div>
      <div class="right-content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="less">
</style>