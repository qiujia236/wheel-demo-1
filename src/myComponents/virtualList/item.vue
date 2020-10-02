<template>
  <div class="item">{{ item.id }}--{{ item.value }}</div>
</template>

<script>
export default {
  name: "my-item",
  props: {
    item: Object,
  },
};
</script>

<style lang="less" scoped>
.item {
  //   height: 40px;
  padding: 10px 0;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  background-color: #cccccc;
}
</style>
