<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item,index) in titles"
      :key="index"
      :class="{active: currentIndex === index}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style lang="less" scoped>
.tab-control {
  display: flex;
  font-size: 14px;
  text-align: center;
  background-color: #fff;
  height: 40px;
  line-height: 40px;
  .tab-control-item {
    flex: 1;

    span {
      padding: 5px;
    }
  }
  .active {
    color: red;
    span {
      border-bottom: 3px solid red;
    }
  }
}
</style>