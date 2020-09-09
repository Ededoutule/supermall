<!--  -->
<template>
  <div v-show="show" class="toast">{{message}}</div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      isShow: false,
      message: "",
    };
  },

  components: {},

  computed: {},

  methods: {
    show(message, detaly = 500) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, detaly);
    },
  },
};
</script>
<style lang='less' scoped>
.toast {
  position: fixed;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>