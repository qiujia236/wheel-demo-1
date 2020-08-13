<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-collapse",
};
</script>

<style lang="less" scoped>
.collapse {
  border-radius: 4px;
  border-bottom: none;
}
</style>