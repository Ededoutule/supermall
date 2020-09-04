<template>
  <div  v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="star"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div v-if="detailInfo.detailImage.length>0" class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list" v-if="detailInfo.detailImage.length>0">
      <img :src='item'  v-for="(item,index) in detailInfo.detailImage[0].list" :key='index' alt @load="imgLoad" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default: {},
    },
  },
  methods: {
      imgLoad() {
          this.$emit('imgLoad')
      }
  }
};
</script>

<style lang="less" scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
  .info-desc {
    padding: 0 15px;
    .star {
      width: 90px;
      height: 1px;
      background-color: #a3a3a5;
      position: relative;
      float: left;
    }
    .desc {
      padding: 15px 0;
      font-size: 14px;
    }
    .end {
      float: right;
      width: 90px;
      height: 1px;
      background-color: #a3a3a5;
      position: relative;
    }
  }
  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
    // border-bottom: 2px solid #ccc;
  }
  .info-list{
      img{
          width: 100%;
      }
  }
}
</style>