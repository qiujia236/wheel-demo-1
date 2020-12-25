<template>
  <div id="messageApp">
    <my-button @click="success">成功</my-button>
    <my-button @click="info">提示</my-button>
    <my-button @click="warning">警告</my-button>
    <my-button @click="error">错误</my-button>
  </div>
</template>

<script>
import button from "../myComponents/button.vue";
import message from "../myComponents/message/message.vue";

export default {
  name: "messageApp",
  components: { "my-button": button, "my-message": message },
  data() {
    return {
      visible: false,
      options: {
        type: "success",
        message: "这是一条成功消息",
        duration: 2000,
        showClose: false,
      },
    };
  },
  methods: {
    success() {
      message.success({ message: "这是一条成功消息" });
    },
    info() {
      message.info({
        message: "这是一条提示消息",
        duration: 5000,
      });
    },
    warning() {
      message.warning({ message: "这是一条警告消息" });
    },
    error() {
      message.error({
        message: "这是一条错误消息，并且不会自动关闭",
        showClose: true,
      });
    },
  },
};
</script>

<style>
#messageApp {
  margin: 20px;
}
</style>