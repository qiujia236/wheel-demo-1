<template>
  <div class="collapseItem">
    <div class="title">{{title}}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-collapseItem",
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style lang="less" scoped>
.collapseItem {
  .title {
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    .title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  &:last-child {
    .title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  .content {
    padding: 0 8px;
    min-height: 32px;
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
  }
}
</style>