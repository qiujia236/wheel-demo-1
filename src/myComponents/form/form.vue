<template>
  <div class="wb-form">
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
</style>