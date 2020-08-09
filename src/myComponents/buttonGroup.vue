<template>
  <div class="my-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-button-group",
};
</script>

<style lang="less" scoped>
.my-button-group {
  display: inline-flex;
  vertical-align: middle;

  > .my-button {
    border-radius: 0;
    margin-left: -1px;

    &:first-child {
      border-top-left-radius: var(--boreder-radius);
      border-bottom-left-radius: var(--boreder-radius);
      margin-right: 0px;
    }
    &:last-child {
      border-top-right-radius: var(--boreder-radius);
      border-bottom-right-radius: var(--boreder-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
