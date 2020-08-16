<template>
  <div id="treeApp">
    <my-tree>
      <template v-for="item of menuData">
        <my-treeItem v-if="!item.children" :key="item.id">{{item.title}}</my-treeItem>
        <my-reSubMenu v-else :key="`reSubMenu${item.id}`" :data="item"></my-reSubMenu>
      </template>
    </my-tree>
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