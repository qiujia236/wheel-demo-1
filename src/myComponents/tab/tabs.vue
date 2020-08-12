<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "my-tabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      },
    },
  },
  provide() {
    return { eventBus: this.eventBus };
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },

  mounted() {
    this.eventBus.$emit("update:selected", this.name);
  },
};
</script>

<style lang="less" scoped>
</style>