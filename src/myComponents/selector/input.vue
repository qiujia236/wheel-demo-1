<template>
  <div class="selector-input">
    <label class="placeholder">{{ placeholder }}</label>
    <input
      class="input"
      :value="value"
      ref="inputValue"
      @input="searchOptions($event)"
      @focus="searchOptions($event)"
      @blur="setValue(value)"
    />
    <div class="iconfont">
      <icon name="down"></icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-selector-input",
  props: {
    placeholder: {
      type: String,
      default: "请选择",
    },
    value: String,
  },

  methods: {
    searchOptions(ev) {
      this.$emit("searchOptions", ev.target.value);
    },

    setValue(value) {
      const _input = this.$refs.inputValue;
      if (_input.value.length > 0) {
        _input.value = value;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$color: #999;
$input-color: #1890ff;

.selector-input {
  position: relative;
  width: 100%;
  height: 38px;

  .placeholder {
    position: absolute;
    left: 15px;
    top: 8px;
    color: $color;
  }

  .input {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid $color;
    border-radius: 5px;
    outline: none;
    transition: all 0.5s linear;

    &:focus {
      border-color: $input-color;
      box-shadow: 0 0 3px $input-color;
    }
  }

  .iconfont {
    position: absolute;
    right: 15px;
    top: 12px;
    svg {
      fill: #999;
    }
  }
}
</style>