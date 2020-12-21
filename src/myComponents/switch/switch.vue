<template>
  <div
    class="wb-switch"
    @click="handleClick"
    :class="{ ['is-checked']: value }"
  >
    <input class="wb-switch_input" type="checkbox" :name="name" ref="input" />
    <span class="wb-switch_core" ref="core">
      <span class="wb-switch_button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "my-switch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: "",
    },
    inactiveColor: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleClick() {
      this.$emit("input", !this.value);
      this.$nextTick(this.setColor);
      this.$refs.input.checked = this.value;
    },
    setColor() {
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    },
  },
  mounted() {
    this.setColor();
    // 控制checkbox的值
    this.$refs.input.checked = this.value;
  },
};
</script>

<style lang="scss" scoped>
.wb-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;

  .wb-switch_input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }

  .wb-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    background-color: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;

    .wb-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}

.wb-switch.is-checked {
  .wb-switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .wb-switch_button {
      transform: translateX(20px);
    }
  }
}
</style>