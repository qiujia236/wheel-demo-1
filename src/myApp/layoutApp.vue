<template>
  <div id="layoutApp">
    <my-layout>
      <my-sider class="demo">sider</my-sider>
      <my-layout>
        <my-header class="demo">header</my-header>
        <my-content class="demo">content1</my-content>
        <my-footer class="demo">footer</my-footer>
      </my-layout>
    </my-layout>
  </div>
</template>

<script>
export default {
  name: "layoutApp",
};
</script>

<style lang="less" scoped>
.demo {
  border: 1px solid #666;
}
.sider {
  background-color: #333;
  width: 200px;
}
.header {
  background-color: #999;
  height: 100px;
}
.content {
  height: 100px;
}
.footer {
  background: #ccc;
  height: 50px;
}
</style>