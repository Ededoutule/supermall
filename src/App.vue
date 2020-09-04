<template>
  <div id="app" class="wrapper">
    <keep-alive exclude="Detail">
        <router-view></router-view>
    </keep-alive>
    <main-tab-bar v-show="$route.meta.isTabbar"></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from "components/content/MainTabBar/MainTabBar";

export default {
  components: {
    MainTabBar
  },
};
</script>
<style lang="less" scoped>
@import 'assets/css/base';

</style>
