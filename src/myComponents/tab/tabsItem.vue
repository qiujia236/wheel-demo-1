<template>
  <div class="my-tabsItem" :class="classes" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-tabsItem",
  props: {
    name: {
      type: String,
      required: true,
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
      return { active: this.active, disabled: this.disabled };
    },
  },
  inject: ["eventBus"],
  methods: {
    onClick() {
      if (this.disabled) return;
      this.eventBus.$emit("update:selected", this.name, this);
    },
  },
  created() {
    this.eventBus.$on("update:selected", (name) => {
      this.active = name === this.name;
    });
  },
};
</script>

<style lang="scss" scoped>
.my-tabsItem {
  height: 100%;
  padding: 0 2em;
  display: inline-flex;
  align-items: center;
  &.active {
    color: #eb4d4b;
    font-weight: bold;
  }
  &.disabled {
    color: gray;
    cursor: not-allowed;
  }
}
</style>