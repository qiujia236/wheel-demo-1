<template>
  <div class="my-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-button-group",
  mounted() {
    for (const node of this.$el.children) {
      if (node.nodeName.toLowerCase() !== "button") {
        console.warn("my-button-group的子元素应该全是button");
      }
    }
  },
};
</script>

<style lang="less" scoped>
.my-button-group {
  display: inline-flex;
  vertical-align: middle;

  > .my-button {
    border-radius: 0;
    margin-left: -1px;
    margin-right: -1px;

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      margin-left: 0;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
