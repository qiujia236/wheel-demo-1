<template>
  <div class="wb-form" ref="wbForm">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-form",
  props: {
    model: {
      type: Object,
      required: true,
    },
    labelWidth: {
      type: String,
      default: "60px",
    },
  },
  provide() {
    return { Form: this };
  },
};
</script>

<style>
.wb-form {
  padding: 20px 50px 10px 0px;
  display: inline-block;
  border: 1px solid #cad3c8;
  border-radius: 5px;
  background-color: #fff;
}
</style>