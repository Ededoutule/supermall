<template>
  <div class="goods">
    <goods-list-item v-for="(good,index) in goods" :key="index" :good="good"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default: [],
    },
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style lang="less" scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>