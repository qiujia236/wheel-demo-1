<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "my-collapse",
  props: {
    single: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Array,
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);

    this.eventBus.$on("update:addSelected", (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      if (this.single) {
        selectedCopy = [name];
      } else {
        selectedCopy.push(name);
      }
      this.eventBus.$emit("update:selected", selectedCopy);
      this.$emit("update:selected", selectedCopy);
    });

    this.eventBus.$on("update:removeSelected", (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      let index = selectedCopy.indexOf(name);
      selectedCopy.splice(index, 1);
      this.eventBus.$emit("update:selected", selectedCopy);
      this.$emit("update:selected", selectedCopy);
    });
  },
  beforeDestroy() {
    this.eventBus.$off("update:selected");
    this.eventBus.$off("update:addSelected");
    this.eventBus.$off("update:removeSelected");
  },
};
</script>

<style lang="scss" scoped>
.collapse {
  border-radius: 4px;
  border-bottom: none;
}
</style>