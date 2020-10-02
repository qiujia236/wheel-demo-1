<template>
  <div id="modalApp">
    <button @click="showMessage">弹层组件</button>
  </div>
</template>

<script>
import { Message } from "./Message";

export default {
  name: "my-modal",
  methods: {
    showMessage() {
      Message.info({
        message: "hello",
        duration: 3000,
      });
    },
  },
};
</script>

<style lang="less" scoped>
#modalApp {
  margin: 20px;
}
</style>