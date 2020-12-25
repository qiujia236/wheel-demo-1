<template>
  <div id="virtualApp">
    <!-- variable表示高度未知 -->
    <my-virtualList
      :size="40"
      :remain="10"
      :items="items"
      :preRender="4"
      :variable="true"
    >
      <my-item slot-scope="{ item }" :item="item"></my-item>
    </my-virtualList>
  </div>
</template>

<script>
// Mock.Random.sentence(5, 50)
import Mock from "mockjs";

let items = [];
for (let i = 0; i < 120; i++) {
  items.push({ id: i, value: `item-${i}` });
}

export default {
  name: "virtualApp",
  data() {
    return { items };
  },
};
</script>

<style lang="scss" scoped>
#virtualApp {
  margin: 20px;
}
</style>
