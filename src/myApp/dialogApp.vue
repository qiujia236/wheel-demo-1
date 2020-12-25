<template>
  <div id="dialogApp">
    <my-button class="start" @click="start">开启dialog</my-button>
    <my-dialog
      title="温馨提示"
      :visible.sync="visible"
      width="50%"
      marginTop="100px"
    >
      <template v-slot:title>
        <h2>我是标题</h2>
      </template>
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
import dialog from "../myComponents/dialog/Dialog.vue";
import button from "../myComponents/button.vue";

export default {
  name: "dialogApp",
  components: {
    "my-dialog": dialog,
    "my-button": button,
  },
  data() {
    return { visible: false };
  },
  methods: {
    start() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style lang="less" scoped>
#dialogApp {
  margin: 20px;
  .start {
    background-color: #e84118;
  }
  .primary {
    background-color: #3498db;
  }
  .my-button:first-child {
    margin-right: 20px;
  }
}
</style>