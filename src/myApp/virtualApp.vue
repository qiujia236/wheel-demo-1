<template>
  <div id="virtualApp">
    <!-- variable表示高度未知 -->
    <my-virtualList
      :size="40"
      :remain="10"
      :items="items"
      :preRender="4"
      :variable="false"
    >
      <my-item slot-scope="{ item }" :item="item"></my-item>
    </my-virtualList>
  </div>
</template>

<script>
// import Mock from "mockjs";
// Mock.Random.sentence(5, 50)
import virtualList from "../myComponents/virtualList/virtualList.vue";
import item from "../myComponents/virtualList/item.vue";

let items = [];
for (let i = 0; i < 100; i++) {
  items.push({ id: i, value: `item-${i}` });
}

export default {
  name: "virtualApp",
  components: {
    "my-virtualList": virtualList,
    "my-item": item,
  },
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
