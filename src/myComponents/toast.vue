<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-toast",
};
</script>

<style lang="less" scoped>
@font-size: 14px;
@toast-height: 40px;
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: @font-size;
  line-height: @toast-height;
  height: @toast-height;
  background-color: #999;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  padding: 0 16px;
}
</style>