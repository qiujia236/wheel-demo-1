<template>
  <div class="subMenu" @mouseenter="showSubMenu" @mouseleave="hideSubMenu">
    <div class="title">
      <slot name="title"></slot>
      <icon name="right" class="icon"></icon>
    </div>
    <div class="sub-item" v-show="subMenu">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-subMenu",
  data() {
    return {
      subMenu: false,
    };
  },
  methods: {
    showSubMenu() {
      this.subMenu = true;
    },
    hideSubMenu() {
      this.subMenu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
$height: 25px;
.subMenu {
  position: relative;

  .title {
    height: $height;
    text-align: center;
    line-height: $height;
    color: #ffffff;
    border: 1px solid #40739e;
    border-bottom: none;

    .icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 3px;
    }
  }

  .sub-item {
    position: absolute;
    left: 100%;
    top: 0;
    width: 100%;
    background-color: #747d8c;
  }
}
</style>