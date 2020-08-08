<template>
  <div>
    <g-button></g-button>
  </div>
</template>

<script>
import button from "./button";
export default {
  components: {
    "g-button": button,
  },
};
</script>

<style lang="less" scoped>
div {
  margin: 20px;
}
</style>