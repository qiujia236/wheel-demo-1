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
    this.$children.forEach((vm) => {
      if (vm.$options.name === "my-tabsHead") {
        vm.$children.forEach((child) => {
          let childName = child.$options.name;
          if (childName === "my-tabsItem" && child.name === this.selected) {
            this.eventBus.$emit("update:selected", this.selected, child);
          }
        });
      }
    });
  },
};
</script>

<style lang="less" scoped>
</style>