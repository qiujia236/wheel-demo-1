<template>
  <button
    class="my-button"
    :class="`icon-${iconPosition}`"
    @click="$emit('click')"
  >
    <icon v-if="iconProps && !loading" :name="iconProps"></icon>
    <icon v-if="loading" name="loading" :class="{ loading }"></icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import icon from "./icon/icon.vue";

export default {
  name: "my-button",
  components: {
    icon,
  },
  props: {
    iconProps: {},
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        if (value !== "left" && value !== "right") {
          return false;
        } else {
          return true;
        }
      },
    },
  },
};
</script>

<style lang="less" scoped>
.my-button {
  font-size: 14px;
  height: 32px;
  padding: 0 0.7em;
  border-radius: 4px;
  border: 1px solid #7f8c8d;
  background: #ecf0f1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  margin: 5px 5px;

  &:hover {
    border-color: #ecf0f1;
  }
  &:active {
    background-color: #bdc3c7;
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    height: 1em;
    width: 1em;
    margin-right: 0.3em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  animation: spin 1.5s infinite linear;
}
</style>
