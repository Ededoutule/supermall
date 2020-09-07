<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" ref="detailnav" @titleClick="titleClick"></detail-nav-bar>
    <scroll
      :datas="[1]"
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="2"
      :pull-up-load="true"
      :pull-down="true"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"></detail-goods-info>
      <detail-param-info ref="param" :param-info="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>
    <detail-choose-info :sku-info="skuInfo" @addToCart="addShopping"></detail-choose-info>
    <detail-botton-bar></detail-botton-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottonBar from "./childComps/DetailBottonBar";
import DetailChooseInfo from "./childComps/DetailChooseInfo";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import { debounce } from "common/utlis";
import { Mixins, backTopMixins } from "common/mixin";

import { Dialog } from "vant";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";

export default {
  name: "Detail",
  props: ["id"],
  data() {
    return {
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      skuInfo: {},
      themeTops: [],
      currentIndex: -1,
    };
  },
  mixins: [Mixins, backTopMixins], //使用混入 , 可以混入与其他组件一样的东西
  mounted() {
    getDetail(this.id).then((res) => {
      // 1.获取顶部的图片轮播数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);
      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;
      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 6.获取评论数
      this.commentInfo = data.rate;
      //7.获取选择物品样式
      this.skuInfo = data.skuInfo;
      console.log(this.shop);
      /*
      / 1.第一次获取，值不对。
      / 指不定的原因： this$refs.param.$el没有渲染
      */
      // console.log(this.$refs.param.$el.offsetTop);
      // console.log(this.$refs.comment.$el.offsetTop);
      // console.log(this.$refs.recommend.$el.offsetTop);

      /*
      / 2.第2次获取，值不对。
      / 指不定的原因： 图片没有计算在内
      / 根据最新的数据，对应的DOM是已经渲染出来了
      / 但是图片并没有加载完全，（获取的offsetTop的值不包括图片的高度）
      */
      // this.$nextTick(() => {
      //   this.themeTops[0] = 0;
      //   this.themeTops[1] = this.$refs.param.$el.offsetTop;
      //   this.themeTops[2] = this.$refs.comment.$el.offsetTop;
      //   this.themeTops[3] = this.$refs.recommend.$el.offsetTop;
      // });
    });
    /*
      / 3.这一次获取，值不对。
      / 指不定的原因： axios是异步的，组件的数据并没有获取到，this$refs.param.$el没有
      */
    // console.log(this.$refs.param.$el.offsetTop);
    // console.log(this.$refs.comment.$el.offsetTop);
    // console.log(this.$refs.recommend.$el.offsetTop);

    //获取推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
    // 当图片加载完成时，更新better-scroll 的内容
    //使用节流函数
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.flag = debounce(() => {
      this.$nextTick(() => {
        this.themeTops[0] = 0;
        this.themeTops[1] = this.$refs.param.$el.offsetTop - 44;
        this.themeTops[2] = this.$refs.comment.$el.offsetTop - 44;
        this.themeTops[3] = this.$refs.recommend.$el.offsetTop - 44;
        this.themeTops[4] = Number.MAX_VALUE;
      }, 50);
    });
    this.$bus.$on("detailitemImageLoad", () => {
      //图片加载完成后，执行这个函数
      refresh();
      this.flag();
    });
  },
  methods: {
    contentScroll(pos) {
      // let posy = -pos.y;
      // let length = this.themeTops.length;
      // for (let index = 0; index < length - 1; index++) {
      //   if (
      //     this.currentIndex !== index &&
      //     posy >= this.themeTops[index] &&
      //     posy < this.themeTops[index + 1]
      //   ) {
      //     this.currentIndex = index;
      //     this.$refs.detailnav.currentIndex = index;
      //     console.log(index)
      //   }
      // }
      this.listenShowBackTop(pos);
      let posy = -pos.y;
      let index = this.themeTops.findIndex((top, index) => {
        // posy>=当前top && posy<下一个this.themeTops
        return posy >= top && posy < this.themeTops[index + 1];
      });
      if (posy > 0) {
        this.$refs.detailnav.currentIndex = index;
      }
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTops[index], 0);
    },
    imgLoad() {
      this.$refs.scroll.refresh();
      this.flag();
    },
    addShopping(count) {
      // 1.创建对象
      const obj = {};
      // 2.对象信息
      obj.iid = this.id;
      obj.imgURL = this.topImages[0];
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.newPrice = count.price;
      obj.count = count.count;
      obj.style = count.style;
      obj.size = count.size;
      obj.shopname = this.shop.name;
      // 3.添加到Store中
      this.$store.dispatch("addshoping", obj);
      Dialog.alert({
        message: "购物车添加成功",
      }).then(() => {
      });
    },
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottonBar,
    DetailChooseInfo,
  },
};
</script>

<style lang="less" scoped>
#detail {
  height: 100vh;
  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #ffff;
  }
  .content {
    height: calc(100% - 93px);
    // position: relative;
    // right: 0;
    // left: 0;
    // top: 44px;
  }
}
</style>