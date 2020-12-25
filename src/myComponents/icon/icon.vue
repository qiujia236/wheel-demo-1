<template>
  <svg class="icon" @click="$emit('click', $event)" :style="{ fill: color }">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script>
import "./svg.js";

export default {
  name: "icon",
  props: {
    name: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="less" scoped>
.icon {
  width: 1em;
  height: 1em;
}
</style>
