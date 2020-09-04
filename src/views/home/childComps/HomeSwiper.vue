<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt  @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    banners: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      isEmit: false,
    };
  },
  methods: {
    imageLoad() {
      if (!this.isEmit) {
        this.$emit("swiperImageLoad");
        this.isEmit = true
      }
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style lang="" scoped>
</style>