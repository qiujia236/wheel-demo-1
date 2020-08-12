<template>
  <div class="my-tabsHead">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-tabsHead",
  inject: ["eventBus"],
};
</script>

<style lang="less" scoped>
@tab-height: 40px;
.my-tabsHead {
  display: flex;
  height: @tab-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;

  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>