<template>
  <div class="my-tabsItem" :class="classes" @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-tabsItem",
  props: {
    name: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
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
  inject: ["eventBus"],
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
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
.my-tabsItem {
  flex-shrink: 0;
  padding: 0 2em;
  &.active {
    background-color: red;
  }
}
</style>