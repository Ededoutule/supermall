<template>
    <tab-bar>
      <tab-bar-item path="/home" actionColor='blue'> 
        <img slot='item-icon' class="item-icon" src="~assets/images/tabbar/loading.gif" alt />
        <!-- <img slot='item-icon-action' class="item-icon" src="./assets/images/tabbar/loading.gif" alt /> -->
        <div slot='item-text' class="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot='item-icon' class="item-icon" src="~assets/images/tabbar/loading.gif" alt />
        <!-- <img slot='item-icon-action' class="item-icon" src="./assets/images/tabbar/loading.gif" alt /> -->
        <div slot='item-text' class="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot='item-icon' class="item-icon" src="~assets/images/tabbar/loading.gif" alt />
        <!-- <img slot='item-icon-action' class="item-icon" src="./assets/images/tabbar/loading.gif" alt /> -->
        <div slot='item-text' class="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot='item-icon' class="item-icon" src="~assets/images/tabbar/loading.gif" alt />
        <!-- <img slot='item-icon-action' class="item-icon" src="./assets/images/tabbar/loading.gif" alt /> -->
        <div slot='item-text' class="item-text">首页</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBaritem";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style lang="less">
    
</style>