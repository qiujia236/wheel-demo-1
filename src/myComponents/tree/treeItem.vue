<template>
  <div class="treeItem" @click.stop="x">
    <slot></slot>
  </div>
</template>

<script>
import { EventBus } from "./eventBus.js";

export default {
  name: "my-treeItem",
  methods: {
    x() {
      EventBus.$emit("dataMsg", this.$slots.default[0].text);
    },
  },
};
</script>

<style lang="scss" scoped>
$height: 25px;
.treeItem {
  height: $height;
  text-align: center;
  line-height: $height;
  color: #ffffff;
  border: 1px solid #40739e;

  &:not(:last-child) {
    border-bottom: none;
  }
}
</style>