<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#tab-bar {
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.1);
  z-index: 9;
}
</style>