<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  //   props: {
  //     probeType: {
  //       type: Number,
  //       default: 1,
  //     },
  //     pullUpLoad: {
  //       type: Number,
  //       default: 1,
  //     },
  //   },
  data() {
    return {
      scroll: "",
    };
  },
  mounted() {
    
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 3,
        pullUpLoad: true
      });
 

    console.log(this.scroll);
    // this.scroll.on("scroll", (position) => {
    //   //   console.log(position);
    // });
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  //  overflow: hidden;
  .content {
    .tap-contro {
      position: sticky;
      top: 44px;
      z-index: 9;
    }
  }
}
</style>