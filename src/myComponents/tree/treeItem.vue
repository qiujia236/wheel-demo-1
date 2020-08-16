<template>
  <div class="treeItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-treeItem",
};
</script>

<style lang="less" scoped>
@height: 25px;
.treeItem {
  height: @height;
  text-align: center;
  line-height: @height;
  color: #ffffff;
  border: 1px solid slategrey;

  &:not(:last-child) {
    border-bottom: none;
  }
}
</style>