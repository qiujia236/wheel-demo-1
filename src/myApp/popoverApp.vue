<template>
  <div id="popoverApp">
    <my-popover position="top" trigger="hover">
      <template slot="content">
        <div>popoverApp contentpopoverApp content</div>
      </template>
      <button>点击</button>
    </my-popover>
    <my-popover position="bottom">
      <template slot="content">
        <div>popoverApp contentpopoverApp content</div>
      </template>
      <button>点击</button>
    </my-popover>
    <my-popover position="left">
      <template slot="content">
        <div>popoverApp contentpopoverApp content</div>
      </template>
      <button>点击</button>
    </my-popover>
    <my-popover position="right">
      <template slot="content">
        <div>popoverApp contentpopoverApp content</div>
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