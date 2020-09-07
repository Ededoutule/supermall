<!--  -->
<template>
  <div>
    <div v-for="(item,index) in shoping" :key="index">
      <cart-list-item :cart-item='item'></cart-list-item>
    </div>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
import { mapState } from "vuex";
export default {
  name: "CartList",
  data() {
    return {};
  },

  components: {
    CartListItem,
  },

  computed: {
    ...mapState(["shoping"]),
  },

  methods: {},
};
</script>
<style lang='less' scoped>
</style>