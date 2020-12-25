<template>
  <div id="popoverApp">
    <my-popover position="top" trigger="hover">
      <template slot="content">
        <div style="color: #f1453d">popoverApp contentpopoverApp content</div>
      </template>
      <my-button>上方hover弹出</my-button>
    </my-popover>

    <my-popover position="bottom">
      <template slot="content" slot-scope="{ close }">
        <a href="https://github.com/Orange-ice/Ice-UI">这是个a链接</a>
        <my-button @click="close">关闭</my-button>
      </template>
      <my-button>上方弹出</my-button>
    </my-popover>

    <my-popover position="left">
      <template slot="content">
        <div>popoverApp contentpopoverApp content</div>
      </template>
      <my-button>下方弹出</my-button>
    </my-popover>

    <my-popover position="right">
      <template slot="content">
        <div>popoverApp contentpopoverApp content</div>
      </template>
      <my-button>右边弹出</my-button>
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