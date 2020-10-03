<template>
  <div class="subNav">
    <span @click="onClick">
      <slot name="title"> </slot>
    </span>
    <div class="popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-subNav",
  data() {
    return { open: false };
  },

  methods: {
    onClick() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="scss" scoped>
.subNav {
  position: relative;
  > span {
    display: block;
    padding: 10px 20px;
  }
  .popover {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 3px;
    white-space: nowrap;
    box-shadow: 0 0 3px #95a5a6;
    border-radius: 4px;
    font-size: 13px;
  }
}

.subNav .subNav .popover {
  top: 0;
  left: 100%;
  margin-left: 3px;
}
</style>
