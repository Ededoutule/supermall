<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="less" scoped>
.recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 18px;
  border-bottom: 8px solid #eee;
  .recommend-item {
    flex: 1;
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
      img {
        width: 65px;
        height: 65px;
        margin-bottom: 8px;
      }
    }
  }
}
</style>