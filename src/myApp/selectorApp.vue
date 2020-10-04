<template>
  <div id="selectorApp">
    <my-selector :itemData="itemData" placeholder="请选择框架" />
  </div>
</template>

<script>
import { itemData } from "../myComponents/selector/focus.js";
export default {
  name: "selectorApp",

  data() {
    return { itemData };
  },
};
</script>

<style lang="scss" scoped>
#selectorApp {
  margin: 20px;
}
</style>