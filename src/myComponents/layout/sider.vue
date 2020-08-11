<template>
  <transition name="fade">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button class="button" @click="visible=false">button</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "my-sider",
  data() {
    return {
      visible: true,
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
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