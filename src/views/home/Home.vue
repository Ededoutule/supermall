<template>
  <div id="home" class="wr">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      ref="tabControl1"
      class="tap-contro"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      :datas="goods[currentType].list"
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      :pull-down="true"
      @pullingUp="loadMore"
      @pullingDown="pullingDown"
    >
      <home-swiper @swiperImageLoad="swiperImageLoad" :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control ref="tabControl2" :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import TabControl from "components/content/tabControl/TabControl";
import NavBar from "components/common/navbar/NavBar";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { debounce } from "common/utlis";
import { Mixins, backTopMixins } from "common/mixin";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop", //传入的goods 的
      taboffsetTop: 0,
      isTabFixed: false, //tab是否固定
    };
  },
  mixins: [Mixins, backTopMixins], //使用混入 , 可以混入与其他组件一样的东西
  mounted() {
    this._getHomeMultidata();
    this._getHomeGoods("pop");
    this._getHomeGoods("new");
    this._getHomeGoods("sell");
    // 当图片加载完成时，更新better-scroll 的内容
    //使用节流函数
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("homeitemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    contentScroll(position) {
      this.listenShowBackTop(position)
      // console.log(-position.y);
      this.isTabFixed = -position.y > this.taboffsetTop;
    },

    //获取数据
    _getHomeMultidata() {
      getHomeMultidata().then((res) => {
        if (res.success) {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        }
      });
    },
    //获取数据
    _getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp(); //获取新的数据
        this.$refs.scroll.finishPullDown(); //获取新的数据
      });
    },
    //点击获取'流行', '新款', '精选' 的数据
    tabClick(index) {
      const arr = ["pop", "new", "sell"];
      this.currentType = arr[index];
      // this.$refs.scroll.scrollTo(0, -this.taboffsetTop-2, 500);  //点击时，到'流行', '新款', '精选'
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    loadMore() {
      this._getHomeGoods(this.currentType);
    },
    pullingDown() {
      console.log(222);
    },
    swiperImageLoad() {
      this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop;
      this.$refs.scroll.refresh(); //更新Bscroll 对象
    },
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
  },
};
</script>

<style lang="less" scoped>
#home {
  height: 100vh;
  position: relative;
  .home-nav {
    background-color: #ff8198;
    color: #fff;
    /*在使用浏览器原生滚动时, 为了让导航不跟随一起滚动*/
    // position: fixed;
    // top: 0;
    // left: 0;
    // right: 0;
    // z-index: 9;
  }
  .wrapper {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .tap-contro {
    position: relative;
    z-index: 9;
  }
  // .active{
  //   position: fixed;
  //   top: 44px;
  //   right: 0;
  //   left: 0;
  // }
}
</style>