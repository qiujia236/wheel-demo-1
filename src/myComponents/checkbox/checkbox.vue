<template>
  <div
    class="wb-checkbox"
    :class="{ 'is-checked': isChecked }"
    @click="handleValue"
  >
    <span class="wb-checkbox_input">
      <span class="wb-checkbox_inner"></span>
      <input
        type="checkbox"
        class="wb-checkbox_original"
        :name="name"
        v-model="model"
      />
    </span>
    <span class="wb-checkbox_label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </div>
</template>

<script>
export default {
  name: "my-checkbox",
  inject: {
    CheckboxGroup: { default: "" },
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleValue() {
      if (this.isGroup) {
        let handleArray = JSON.parse(JSON.stringify(this.CheckboxGroup.value));
        if (!handleArray.includes(this.label)) {
          handleArray.push(this.label);
        } else {
          let index = handleArray.indexOf(this.label);
          handleArray.splice(index, 1);
        }
        this.CheckboxGroup.$emit("update:value", handleArray);
      } else {
        this.$emit("update:value", !this.value);
      }
    },
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value;
      },
    },
    isGroup() {
      return !!this.CheckboxGroup;
    },
    isChecked() {
      return this.isGroup ? this.model.includes(this.label) : this.model;
    },
  },
};
</script>

<style lang='scss' scoped>
.wb-checkbox {
  position: relative;
  display: inline-block;
  color: #606266;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  .wb-checkbox_input {
    position: relative;
    display: inline-block;
    line-height: 1;
    outline: none;
    white-space: nowrap;
    cursor: pointer;
    vertical-align: middle;

    .wb-checkbox_inner {
      display: inline-block;
      position: relative;
      width: 14px;
      height: 14px;
      border-radius: 2px;
      box-sizing: border-box;
      border: 1px solid #dcdfe6;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, 0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, 0.46, 0.29, 1.46);

      &:after {
        position: absolute;
        left: 4px;
        top: 1px;
        width: 3px;
        height: 7px;
        box-sizing: content-box;
        content: "";
        border: 1px solid #000;
        border-left: 0;
        border-top: 0;
        transform: rotate(45deg) scaleY(0);
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }

    .wb-checkbox_original {
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      opacity: 0;
      outline: none;
      z-index: -1;
    }
  }

  .wb-checkbox_label {
    display: inline-block;
    padding-left: 10px;
    line-height: 10px;
    font-size: 14px;
  }
}

.wb-checkbox.is-checked {
  .wb-checkbox_input {
    .wb-checkbox_inner {
      border-color: #409eff;
      background-color: #409eff;
      &::after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }

  .wb-checkbox_label {
    color: #409eff;
  }
}
</style>