<template>
  <div class="row" :style="gutter&&{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-row",
  props: {
    gutter: { type: [Number, String] },
  },
  mounted() {
    console.log(this.$children);
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  },
};
</script>

<style lang="less" scoped>
.row {
  display: flex;
}
</style>