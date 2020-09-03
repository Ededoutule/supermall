<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <del class="o-price">{{goods.oldPrice}}</del>
      <span v-show="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div v-if="goods.columns.length > 0" class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service" v-if="goods.services.length > 0">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" />
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="less" scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
  .info-title {
    color: #222;
  }
  .info-price {
    margin-top: 10px;
    .n-price {
      font-size: 24px;
      color: #ff5777;
    }
    .o-price {
      font-size: 13px;
      margin: 0 5px;
    }
    .discount {
      font-size: 12px;
      padding: 2px 5px;
      color: #fff;
      background-color: #ff5777;
      border-radius: 8px;
      margin-left: 5px;

      /*让元素上浮一些: 使用相对定位即可*/
      position: relative;
      top: -8px;
    }
  }
  .info-other {
    display: flex;
    font-size: 16px;
    padding: 20px 0 12px;
    justify-content: space-between;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }
  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    img {
      width: 14px;
      height: 14px;
      position: relative;
      top: 2px;
    }
    span {
      font-size: 13px;
      color: #333;
    }
  }
}
</style>