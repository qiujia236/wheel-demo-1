<template>
  <div class="cascaderItem">
    {{ sourceItem.name }}
    <my-cascaderItem
      v-for="(item, index) in sourceItem.children"
      :key="`${index}children`"
      :sourceItem="item"
    />
  </div>
</template>

<script>
export default {
  name: "my-cascaderItem",
  props: {
    sourceItem: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../var";

.cascaderItem {
  margin: 10px;
  border: 1px solid red;
}
</style>
