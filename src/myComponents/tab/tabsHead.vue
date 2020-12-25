<template>
  <div class="my-tabsHead">
    <slot></slot>
    <div class="line" ref="line" v-if="x"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-tabsHead",
  inject: ["eventBus"],
  data() {
    return { x: false };
  },
  created() {
    this.eventBus.$on("update:selected", (item, vm) => {
      this.x = true;
      this.$nextTick(() => {
        let { width, height, top, left } = vm.$el.getBoundingClientRect();
        this.$refs.line.style.width = `${width}px`;
        this.$refs.line.style.left = `${vm.$el.offsetLeft}px`;
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.my-tabsHead {
  display: flex;
  height: 40px;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #686de0;

  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid #4834d4;
    transition: all 350ms;
  }
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>