<template>
  <div class="tree">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-tree",
};
</script>

<style lang="less" scoped>
.tree {
  width: 140px;
  background-color: #666;
}
</style>