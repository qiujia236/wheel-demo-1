<template>
  <div class="reSubMenu">
    <my-subMenu>
      <template #title>{{data.title}}</template>
      <template v-for="c of data.children">
        <my-treeItem v-if="!c.children" :key="`treeItem${c.id}`">{{c.title}}</my-treeItem>
        <my-reSubMenu v-else :key="`reSubMenu${c.id}`" :data="c"></my-reSubMenu>
      </template>
    </my-subMenu>
  </div>
</template>

<script>
export default {
  name: "my-reSubMenu",
  props: {
    data: Object,
  },
  mounted() {
    console.log(this.data);
  },
};
</script>

<style lang="less" scoped>
.reSubMenu {
}
</style>