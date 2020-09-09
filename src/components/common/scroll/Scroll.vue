<template>
  <div class="wrapper" ref="wrapper">
    <div >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import Pulldown from "@better-scroll/pull-down";

BScroll.use(Pullup);
BScroll.use(Pulldown);

export default {
  props: {
    datas: {
      type: Array,
      default: [],
    },
    probeType: {
      type: Number,
      default: 2,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
    pullDown: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: "",
    };
  },
  mounted() {
    // this.$nextTick(() => {
    //   this._initScroll();
    // });
    setTimeout(() => {
      this._initScroll();
    }, 1000); //设置1秒的延迟生成BScroll对象
  },
  watch: {
    datas() {
      this.$nextTick(() => {
          this.scroll && this.scroll.refresh();     
      });
    },
  },
  methods: {
    _initScroll() {
      //初始化better-scroll
      if (!this.$refs.wrapper) {
        return;
      }

      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        mouseWheel: false,
        //  bounce: false,
        click: true,
        pullUpLoad: this.pullUpLoad,
        pullDownRefresh: {
          threshold: 30, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
          stop: 0, // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
        },
      });

      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });

      // 3.监听scroll滚动到底部，加载更多
      if (this.pullUpLoad) {
        this.scroll.on("pullingUp", () => {
          this.$emit("pullingUp");
        });
      }
      // 3.监听scroll滚动到顶部部，加载更多
      if (this.pullDown) {
        this.scroll.on("pullingDown", () => {
          this.$emit("pullingDown");
        });
      }
    },
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    //加载更多,跟新better-scroll
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    finishPullDown() {
      this.scroll && this.scroll.finishPullDown();
    },
  },
};
</script>

<style lang="less" scoped>
</style>