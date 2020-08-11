<template>
  <div id="toastApp"></div>
</template>

<script>
import plugin from "../myComponents/plugin.js";
import Vue from "vue";
Vue.use(plugin);
export default {
  name: "toastApp",
  created() {
    this.$toast("toastApp");
  },
};
</script>

<style lang="less" scoped>
#toastApp {
  margin: 20px;
}
</style>