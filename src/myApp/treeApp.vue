<template>
  <div id="treeApp">
    <my-tree :source="menuData"></my-tree>
  </div>
</template>

<script>
import menuData from "../myComponents/tree/menu.js";

export default {
  name: "treeApp",
  data() {
    return { menuData };
  },
};
</script>

<style lang="less" scoped>
#treeApp {
  margin: 20px;
}
</style>