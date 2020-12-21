<template>
  <div class="wb-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-checkboxGroup",
  props: {
    value: {
      type: Array,
    },
  },
  provide() {
    return {
      CheckboxGroup: this,
    };
  },
};
</script>

<style>
</style>