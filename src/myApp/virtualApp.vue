<template>
  <div id="virtualApp">
    <!-- variable表示高度未知 -->
    <my-virtualList
      :size="60"
      :remain="8"
      :items="items"
      :preRender="4"
      :variable="true"
    >
      <my-item slot-scope="{ item }" :item="item"></my-item>
    </my-virtualList>
  </div>
</template>

<script>
import Mock from "mockjs";
let items = [];
for (let i = 0; i < 100; i++) {
  items.push({ id: i, value: Mock.Random.sentence(5, 50) });
}

export default {
  name: "virtualApp",
  data() {
    return { items };
  },
};
</script>

<style lang="less" scoped>
#virtualApp {
  margin: 20px;
}
</style>
