<template>
  <div id="dialogApp">
    <my-dialog title="温馨提示" width="50%" marginTop="100px">
      <!-- <template v-slot:title>
        <h3>我是标题</h3>
      </template> -->
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <template v-slot:footer>
        <my-button class="primary">确定</my-button>
        <my-button>取消</my-button>
      </template>
    </my-dialog>
  </div>
</template>

<script>
export default {
  name: "dialogApp",
};
</script>

<style lang="less" scoped>
#dialogApp {
  margin: 20px;
  .primary {
    background-color: #3498db;
  }
  .my-button:first-child {
    margin-right: 20px;
  }
}
</style>