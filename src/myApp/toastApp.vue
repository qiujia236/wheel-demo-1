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
    this.$toast(
      `<strong style="color:blue;">了解了正则你就会发现，原来就这样啊
       正则所用的相关字符其实不多，也不难记，更不难懂，唯一难的
       就是组合起来之后，可读性比较差，而且不容易理解，本文旨在
       让大家对正则有一个基本的了解，能看得懂简单的正则表达式，写
       得出简单的正则表达式，用以满足日常开发中的需求即可。</strong>`,
      {
        position: "top",
        autoClose: false,
        text: "close",
        callback: function () {
          console.log("close");
        },
        enableHtml: true,
      }
    );
  },
};
</script>

<style lang="less" scoped>
#toastApp {
  margin: 20px;
}
</style>