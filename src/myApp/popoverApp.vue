<template>
  <div id="popoverApp">
    <my-popover>
      <template slot="content">
        <div>popoverApp content</div>
      </template>
      <button>点击</button>
    </my-popover>
  </div>
</template>

<script>
export default {
  name: "popoverApp",
};
</script>

<style lang="less" scoped>
#popoverApp {
  margin: 50px;
}
</style>