<!--  -->
<template>
  <div v-show="isChooseshow" v-if="Object.keys(skuInfo).length !== 0" class="choose-info">
    <div class="info-show">
      <img :src="this.skuInfo.skus[skus].img" alt />
      <div class="show-item">
        <div class="show-price">￥{{this.skuInfo.skus[skus].nowprice| fiex}}</div>
        <div class="show-stock">库存{{this.skuInfo.skus[skus].stock}}件</div>
        <div class="show-size">
          已选:
          <span>"{{this.skuInfo.skus[skus].style}}"</span>
          <span>"{{this.skuInfo.skus[skus].size}}"</span>
        </div>
        <div class="show-clear" @click="closeCart">+</div>
      </div>
    </div>
    <div class="info-style">
      <div class="ifno-title">{{skuInfo.props[0].label}}</div>
      <div class="info-ll" v-for="(list,indey) in skuInfo.props[0].list" :key="indey">
        <div
          class="item-info"
          :class="{active: choosestyleindex === indey}"
          @click="choosestyleClice(indey)"
        >{{list.name}}</div>
      </div>
    </div>
    <div class="info-style">
      <div class="ifno-title">{{skuInfo.props[1].label}}</div>
      <div class="info-ll" v-for="(list,indey) in skuInfo.props[1].list" :key="indey">
        <div
          class="item-info"
          :class="{active: chooseColorindex === indey}"
          @click="chooseColorClice(indey)"
        >{{list.name}}</div>
      </div>
    </div>
    <div class="info-count">
      <div>购买数量</div>
      <div class="count">
        <span @click="reduceCount">-</span>
        {{count}}
        <span @click="addCount">+</span>
      </div>
    </div>
    <div class="add-info" @click="addCart">
      <div class>加入购物车</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DetailChooseInfo",
  props: {
    skuInfo: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      count: 1,
      choosestyleindex: 0,
      chooseColorindex: 0,
    };
  },
  components: {},

  computed: {
    ...mapState(["isChooseshow"]),
    skus() {
      let style = this.skuInfo.props[0].list[this.choosestyleindex].name; //衣服颜色
      let size = this.skuInfo.props[1].list[this.chooseColorindex].name; //衣服尺码
      let index = this.skuInfo.skus.findIndex((item, index) => {
        return item.style == style && item.size == size;
      });
      return index;
    },
  },

  methods: {
    choosestyleClice(indey) {
      this.choosestyleindex = indey;
    },
    chooseColorClice(indey) {
      this.chooseColorindex = indey;
    },
    reduceCount() {
      if (this.count > 1) {
        this.count--;
      }
    },
    addCount() {
      if (this.count < this.skuInfo.skus[this.skus].stock) {
        this.count++;
      }
    },
    addCart() {
      if (this.skus) {
        this.$store.dispatch("showchoose", false);
        let style = this.skuInfo.props[0].list[this.choosestyleindex].name; //衣服颜色
        let size = this.skuInfo.props[1].list[this.chooseColorindex].name; //衣服尺码
        let price = this.skuInfo.skus[this.skus].nowprice; //衣服价格
        let count = this.count
        this.$emit("addToCart", {count, style, size,price});
      }
    },
    closeCart() {
      this.$store.dispatch("showchoose", false);
    },
  },
};
</script>
<style lang='less' scoped>
.choose-info {
  // position: relative;
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  height: calc(100% - 49px);
  z-index: 10;
  overflow: auto;
  background-color: #fff;
  padding: 10px 10px;
  .info-show {
    display: flex;
    padding: 0px 0 20px;
    border-bottom: 2px solid #e7e7e7;
    align-items: center;
    img {
      width: 90px;
    }
    .show-item {
      div {
        padding: 10px;
        &.show-price {
          font-size: 30px;
        }
        &.show-stock {
          font-size: 15px;
          color: #ccc;
        }
        &.show-size {
          font-size: 16px;
        }
      }
      .show-clear {
        position: relative;
        left: 222px;
        top: -128px;
      }
    }
  }
  .info-style {
    border-bottom: 2px solid #e7e7e7;
    .ifno-title {
      padding: 5px 0px;
    }
    .info-ll {
      display: inline-block;
      align-items: center;
      //   width: 30%;
      margin: 5px 8px;
      .item-info {
        text-align: center;
        border: 1px solid #ff4848;

        padding: 5px 5px;
        border-radius: 5px;
        font-size: 14px;
        &.active {
          color: #ff4848;
        }
      }
    }
  }
  .info-count {
    border-bottom: 2px solid #e7e7e7;
    padding: 10px 0px;
    display: flex;
    div {
      flex: 1;
      &.count {
        text-align: center;
        span {
          display: inline-block;
          width: 20px;
        }
      }
    }
  }
  .add-info {
    position: fixed;
    text-align: center;
    border-radius: 20px;
    background-color: #ff3c3c;
    width: calc(100% - 10px);
    height: 30px;
    line-height: 30px;
    bottom: 0;
    color: #fff;
  }
}
</style>