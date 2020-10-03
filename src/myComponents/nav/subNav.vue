<template>
  <div class="subNav" :class="{ active }" v-ClickOutside="close">
    <span class="label" @click="onClick">
      <slot name="title"> </slot>
      <span class="icon" :class="{ open }">
        <icon name="right"></icon>
      </span>
    </span>
    <div class="popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ClickOutside from "../clickOutside.js";

export default {
  name: "my-subNav",
  directives: { ClickOutside },
  inject: ["root"],

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  data() {
    return { open: false };
  },

  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false;
    },
  },

  methods: {
    onClick() {
      this.open = !this.open;
    },

    close() {
      this.open = false;
    },

    updateNamePath() {
      this.active = true;
      this.root.namePath.unshift(this.name);
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.subNav {
  position: relative;
  &.active {
    &::after {
      content: "";
      position: absolute;
      bottom: 1px;
      left: 0;
      border-bottom: 2px solid #2980b9;
      width: 100%;
    }
  }

  .label {
    display: block;
    padding: 10px 20px;

    .icon {
      display: none;
    }
  }
  .popover {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 3px;
    white-space: nowrap;
    box-shadow: 0 0 3px #95a5a6;
    border-radius: 4px;
    font-size: 13px;
  }
}

.subNav .subNav {
  .popover {
    top: 0;
    left: 100%;
    margin-left: 3px;
  }
  .label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon {
      transition: transform 0.5s;
      &.open {
        transform: rotate(180deg);
      }
      margin-left: 0.5em;
      display: inline-flex;
    }
  }
}
</style>
