<template>
  <div class="wb-radio-group"><slot></slot></div>
</template>

<script>
export default {
  name: "my-radioGroup",
  provide() {
    return { RadioGroup: this };
  },
  props: {
    value: null,
  },
};
</script>

<style>
</style>