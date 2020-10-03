<template>
  <div class="navItem" :class="{ selected }" @click="onClick(name)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-navItem",
  inject: ["root"],

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      selected: false,
    };
  },

  mounted() {
    this.root.addItem(this);
  },

  methods: {
    onClick(name) {
      this.root.namePath = [];
      this.$parent.updateNamePath && this.$parent.updateNamePath();
      this.$emit("add:selected", name);
    },
  },
};
</script>

<style lang="scss" scoped>
.navItem {
  padding: 10px 20px;
  position: relative;
  &.selected {
    &::after {
      content: "";
      position: absolute;
      bottom: 1px;
      left: 0;
      border-bottom: 2px solid #2980b9;
      width: 100%;
    }
  }
}

.subNav .navItem {
  &.selected {
    background-color: #ecf0f1;
    color: #7f8c8d;
    &::after {
      display: none;
    }
  }
}
</style>
