<template>
  <div class="my-tabsPanel" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-tabsPanel",
  inject: ["eventBus"],
  props: {
    name: {
      type: [Number, String],
      required: true,
    },
  },
  data() {
    return { active: false };
  },
  computed: {
    classes() {
      return { active: this.active };
    },
  },
  created() {
    this.eventBus.$on("update:selected", (name) => {
      this.active = name === this.name;
    });
  },
};
</script>

<style lang="less" scoped>
.my-tabsPanel {
  padding: 0 2em;
  &.active {
    font-weight: bold;
  }
}
</style>