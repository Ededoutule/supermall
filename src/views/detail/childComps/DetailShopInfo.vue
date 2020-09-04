<template>
  <div class="shop-info">
    <div class="info-logo">
      <img :src="shop.logo" alt />
      <span>{{shop.name}}</span>
    </div>
    <div class="info-content">
      <div class="left-content">
        <div class="info-sells">
          <div class="sells-count">{{shop.sells}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="right-content">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}">
              <span>{{item.isBetter ? '高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="less" scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
  .info-logo {
    display: flex;
    align-items: center;
    text-align: center;
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
    span {
      margin-left: 10px;
      vertical-align: center;
    }
  }
  .info-content {
    display: flex;
    padding: 0 3px;
    margin-top: 15px;
    .left-content {
      flex: 1;
      display: flex;
      justify-content: space-evenly;
      color: #333;
      align-items: center;
      text-align: center;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      .info-sells {
        flex: 1;
        .sells-count {
          font-size: 18px;
        }
        .sells-text {
          margin-top: 10px;
          font-size: 12px;
        }
      }
      .info-goods {
        flex: 1;
        .goods-count {
          font-size: 18px;
        }
        .goods-text {
          margin-top: 10px;
          font-size: 12px;
        }
      }
    }
    .right-content {
      flex: 1;
      font-size: 13px;
      color: #333;
      table {
        width: 120px;
        margin-left: 30px;
        td {
          padding: 5px 0;
          &.score {
            color: #5ea732;
          }
          &.better {
            span {
              background-color: #5ea732;
              color: #fff;
              text-align: center;
            }
          }
          &.score-better {
            color: #f13e3a;
            span {
              background-color: #f13e3a;
            }
          }
          &.better-more {
            span {
              background-color: #f13e3a;
            }
          }
        }
      }
    }
  }
  .shop-bottom {
    text-align: center;
    margin-top: 10px;
    .enter-shop {
      display: inline-block;
      font-size: 14px;
      background-color: #f2f5f8;
      width: 150px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-radius: 10px;
    }
  }
}
</style>