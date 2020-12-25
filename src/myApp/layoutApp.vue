<template>
  <div id="layoutApp">
    <my-layout>
      <my-sider class="demo" :visible.sync="visible">sider</my-sider>
      <my-layout>
        <my-header class="demo">header</my-header>
        <my-content class="demo">content1</my-content>
        <my-footer class="demo">footer</my-footer>
      </my-layout>
    </my-layout>
  </div>
</template>

<script>
import layout from "../myComponents/layout/layout.vue";
import sider from "../myComponents/layout/sider.vue";
import header from "../myComponents/layout/header.vue";
import content from "../myComponents/layout/content.vue";
import footer from "../myComponents/layout/footer.vue";

export default {
  name: "layoutApp",
  components: {
    "my-layout": layout,
    "my-sider": sider,
    "my-header": header,
    "my-content": content,
    "my-footer": footer,
  },
  data() {
    return { visible: true };
  },
};
</script>

<style lang="scss" scoped>
.demo {
  border: 1px solid #ffffff;
}
.sider {
  background-color: #ddd;
  width: 200px;
}
.header {
  background-color: lightskyblue;
  height: 100px;
}
.content {
  background-color: deepskyblue;
  height: 100px;
}
.footer {
  background: lightskyblue;
  height: 50px;
}
</style>