<!--  -->
<template>
  <div class="botton-bar">
    <div class="bar-item">
      <div>
        <i class="service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="shop"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="select"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-shop" @click='addToCart'>加入购物车</div>
    <div class="bar-buy">购买</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {
    addToCart() {
      this.$store.dispatch('showchoose', true);
    }
  },
};
</script>
<style lang='less' scoped>
.botton-bar {
  position: relative;
  background-color: #cccccc;
  display: flex;
  text-align: center;
  z-index: 9;
  .bar-item {
    flex: 1;
    display: flex;
    div {
      flex: 1;
      span {
        font-size: 14px;
      }
      i {
        display: block;
        width: 22px;
        height: 22px;
        margin: 5px auto 3px;
        background: url("~assets/img/detail/detail_bottom.png") 0;
        background-size: 22px;
        &.service {
          background-position: 0 -54px;
        }
        &.shop {
          background-position: 0 -98px;
        }
        &.select {
          background-position: 0 1px;
        }
      }
    }
  }
  .bar-shop {
    line-height: 49px;
    height: 100%;
    background-color: #ffe817;
    flex-basis: 30%;
  }
  .bar-buy {
    line-height: 49px;
    height: 100%;
    background-color: #ff2f97;
    flex-basis: 20%;
  }
}
</style>