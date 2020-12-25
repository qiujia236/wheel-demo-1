<template>
  <transition name="fade">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button class="button" @click="click">button</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "my-sider",
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    click() {
      console.log(!this.visible);
      this.$emit("update:visible", !this.visible);
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  background-color: inherit;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  margin-left: -200px;
}
</style>