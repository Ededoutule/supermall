<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in topImages" :key="index">
      <a>
        <img :src="item" alt  />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    topImages: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      isEmit: false,
    };
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style lang="less" scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>