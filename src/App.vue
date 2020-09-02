<template>
  <div id="app" class="wrapper">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
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
