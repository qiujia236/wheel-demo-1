<template>
  <div class="wb-form-item">
    <label
      class="wb-form-item_label"
      :style="{ width: this.Form.labelWidth }"
      >{{ label }}</label
    >
    <div class="wb-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-formItem",
  inject: ["Form"],
  props: {
    label: String,
  },
};
</script>

<style lang="scss" scoped>
.wb-form-item {
  margin-bottom: 5px;
  .wb-form-item_label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 2px 12px 0 0;
    box-sizing: border-box;
  }
  .wb-form-item_content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>