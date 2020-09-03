<template>
  <div id="home" class="wr">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control class="tap-contro" :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
        <goods-list :goods="goods[currentType].list"></goods-list>
      </div>
    </div>
  </div>
</template>

//   这个是不用封装组件的写法




<script>
import BScroll from "@better-scroll/core";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import TabControl from "components/content/tabControl/TabControl";
import NavBar from "components/common/navbar/NavBar";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

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
      isRandom: 1, //减少goods-list的复用性，生成随机数
      scroll: null,
    };
  },
  mounted() {
    this._getHomeMultidata();
    this._getHomeGoods(
      "pop"
      ,()=>{
        this.scroll = new BScroll(this.$refs.wrapper, {
              click: true,
              probeType: 3,
              // pullUpLoad: true
            });
      }
    );
    this._getHomeGoods(
      "new"
      ,()=>{
        this.scroll = new BScroll(this.$refs.wrapper, {
              click: true,
              probeType: 3,
              // pullUpLoad: true
            });
      }
    );
    this._getHomeGoods(
      "sell"
      ,()=>{
        this.scroll = new BScroll(this.$refs.wrapper, {
              click: true,
              probeType: 3,
              // pullUpLoad: true
            });
      }
    );

   
  },
  watch: {
    banners() {
      this._updateScroll();
    },
    recommends() {
      this._updateScroll();
    },
    goods() {
      this._updateScroll();
    },
  },
  methods: {
    _updateScroll() {
      console.log(111);
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            click: true,
            probeType: 2,
            // pullUpLoad: true
          });
        }
      });
    },
    _getHomeMultidata() {
      getHomeMultidata().then((res) => {
        if (res.success) {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        }
      });
    },
    _getHomeGoods(type, cd) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        cd && cd();
      });
    },
    tabClick(index) {
      const arr = ["pop", "new", "sell"];
      this.currentType = arr[index];
      this.isRandom = Math.random(1, 100);
      console.log(this.scroll)
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
  // padding-top: 44px;
  height: 100vh;
  position: relative;
  .home-nav {
    background-color: #ff8198;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .wrapper {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
     overflow: hidden;
    .content {
      .tap-contro {
        position: sticky;
        top: 44px;
        z-index: 9;
      }
    }
  }
}
</style>