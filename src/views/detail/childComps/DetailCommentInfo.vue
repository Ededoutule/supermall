<template>
  <div>
    <div v-if="commentInfo.list" class="comment-info">
      <div class="comment">
        <span>用户评论</span>
        <div class="left">更多</div>
      </div>
      <div class="comment-unit">
        <div class="unit-logo">
          <img :src="commentInfo.list[0].user.avatar" alt />
          <span>{{commentInfo.list[0].user.uname}}</span>
        </div>
        <div class="comment-title">{{commentInfo.list[0].content}}</div>
        <div class="comment-center">
          <span class="center-left">{{commentInfo.list[0].created*1000 | data-formt}}</span>
          <span>{{commentInfo.list[0].style}}</span>
        </div>
        <div class="comment-show">
          <img v-for="(item,index) in commentInfo.list[0].images" :key="index" :src="item" alt />
        </div>
      </div>
    </div>
    <div v-else class="no-comment">无评论</div>
  </div>
</template>

<script>
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="less" scoped>
.comment-info {
  padding: 20px 10px;
  border-bottom: 2px solid #ccc;
  .comment {
    display: flex;
    padding: 0 0 20px;
    font-size: 18px;
    border-bottom: 5px solid #f2f5f8;
    span {
      flex: 1;
      &.left {
        flex-basis: 40px;
      }
    }
  }
  .comment-unit {
    .unit-logo {
      display: flex;
      align-items: center;
      text-align: center;
      padding: 20px 10px;
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
  }
  .comment-title {
    font-size: 17px;
  }
  .comment-center {
    padding: 10px 0;
    font-size: 15px;
    color: #bbbbbb;
    .center-left {
      margin-right: 10px;
    }
  }
  .comment-show {
    img {
      width: 50px;
      margin-right: 5px;
    }
  }
}
.no-comment {
  height: 50px;
  text-align: center;
  color: green;
  line-height: 50px;
  padding: 20px 10px;
  border-bottom: 2px solid #ccc;
}
</style>