<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isAction">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-action"></slot>
    </div>
    <div :style="activeStyle" >
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    actionColor: {
        type: String,
        default: 'red'
    }
  },
  //   data() {
  //     return {
  //       isAction: false,
  //     };
  //   },
  computed: {
    isAction() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
        return this.isAction? {color: this.actionColor}: {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style lang="less">
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  .item-icon {
    // align-self: center;
    margin-top: 3px;
    width: 24px;
    height: 24px;
    margin-bottom: 2px;
  }
  .action {
    color: red;
  }
}
</style>