<template>
  <div class="nav" :class="{ vertical }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-nav",
  provide() {
    return { root: this, vertical: this.vertical };
  },

  props: {
    selected: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      items: [],
      namePath: [],
    };
  },

  mounted() {
    this.updateChildren();
    this.listenChildren();
  },

  updated() {
    this.updateChildren();
  },

  methods: {
    addItem(vm) {
      this.items.push(vm);
    },

    updateChildren() {
      this.items.forEach((vm) => {
        if (this.selected.indexOf(vm.name) >= 0) {
          vm.selected = true;
        } else {
          vm.selected = false;
        }
      });
    },

    listenChildren() {
      this.items.forEach((vm) => {
        vm.$on("add:selected", (name) => {
          if (this.multiple) {
            if (this.selected.indexOf(name) < 0) {
              let copy = JSON.parse(JSON.stringify(this.selected));
              copy.push(name);
              this.$emit("update:selected", copy);
            }
          } else {
            this.$emit("update:selected", [name]);
          }
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: inline-flex;
  border-bottom: 1px solid #95a5a6;
  cursor: pointer;
  &.vertical {
    flex-direction: column;
    width: 200px;
    border: 1px solid #000;
    overflow: hidden;
  }
}
</style>
