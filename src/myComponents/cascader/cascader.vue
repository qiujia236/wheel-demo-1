<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popver">
      <div v-for="(item, index) in source" :key="index">
        <my-cascaderItem :sourceItem="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-cascader",
  props: {
    source: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../var";
.cascader {
}
</style>
