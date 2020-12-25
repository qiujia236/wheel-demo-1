<template>
  <div class="wb-radio" :class="{ 'is-checked': label == model }">
    <span class="wb-radio_input">
      <span class="wb-radio_inner"></span>
      <input
        class="wb-radio_original"
        type="radio"
        :value="label"
        :name="name"
        v-model="model"
      />
    </span>
    <span class="wb-radio_label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </div>
</template>

<script>
export default {
  name: "my-radio",

  inject: {
    RadioGroup: { default: "" },
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: "",
    },
    value: null,
    name: {
      type: String,
      default: "",
    },
  },

  computed: {
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        this.isGroup
          ? this.RadioGroup.$emit("input", value)
          : this.$emit("input", value);
      },
    },
    isGroup() {
      // 用于判断radio是否被radioGroup所包裹
      return !!this.RadioGroup;
    },
  },
};
</script>

<style lang='scss' scoped>
.wb-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  .wb-radio_input {
    position: relative;
    display: inline-block;
    line-height: 1;
    outline: none;
    white-space: nowrap;
    cursor: pointer;
    vertical-align: middle;

    .wb-radio_inner {
      position: relative;
      width: 14px;
      height: 14px;
      display: inline-block;
      box-sizing: border-box;
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      background-color: #fff;
      cursor: pointer;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.3s ease-in;
      }
    }

    .wb-radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }

  .wb-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}

.wb-radio.is-checked {
  .wb-radio_input {
    .wb-radio_inner {
      border-color: #409eff;
      background-color: #409eff;
      &::after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }

  .wb-label {
    color: #409eff;
  }
}
</style>