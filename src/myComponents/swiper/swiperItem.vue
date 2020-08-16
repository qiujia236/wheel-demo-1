<template>
  <transition>
    <div class="swiperItem" v-if="selfIndex === currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "my-swiperItem",
  data() {
    return {
      selfIndex: this.$vnode.key,
    };
  },

  computed: {
    currentIndex() {
      return this.$parent.currentIndex + 1;
    },
  },
};
</script>

<style lang="less" scoped>
.swiperItem {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-color: #ddd;
}

.v-enter-active,
.v-leave-active {
  transition: all 1s linear;
}

.v-enter-active {
  transform: translateX(100%);
}

.v-enter-to {
  transform: translateX(0);
}

.v-leave-active {
  transform: translateX(0);
}

.v-leave-to {
  transform: translateX(-100%);
}
</style>