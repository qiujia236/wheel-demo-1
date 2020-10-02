<template>
  <div class="wrapper" :class="{ error: error }">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @input="$emit('input', $event.target.value)"
    />
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>

<script>
export default {
  name: "my-input",
  props: {
    value: {
      type: String,
      default: "正常状态",
    },
    disabled: {
      type: Boolean,
      defautl: false,
    },
    readonly: {
      type: Boolean,
      defautl: false,
    },
    error: {
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
@height: 32px;
@border-color: #999;
@border-color-hover: #666;
@font-size: 14px;
@box-shadow-color: rgba(0, 0, 0, 0.5);
@red: red;

.wrapper {
  margin: 0.5em;
  vertical-align: middle;
  font-size: @font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin: 0 0.3em;
  }

  > input {
    height: @height;
    border: 1px solid @border-color;
    border-radius: 4px;
    padding: 0 8px;
    &:hover {
      border-color: @border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px @box-shadow-color;
      outline: none;
    }
    &:disabled,
    &:read-only {
      border-color: #ccc;
      color: #ccc;
      cursor: not-allowed;
    }
  }
}

.error {
  > input {
    border-color: @red;
  }

  .icon-error {
    fill: red;
  }

  .error-message {
    color: red;
  }
}
</style>
