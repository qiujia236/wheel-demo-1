<template>
  <div id="tabApp">
    <!-- <my-tabs :selected="selectedTab" v-bind:update:selected="selectedTab=$event"> -->
    <my-tabs :selected.sync="selectedTab" direction="horizontal">
      <my-tabsHead>
        <my-tabsItem name="test1">
          <icon name="setting"></icon>
          <span>tabsItem1</span>
        </my-tabsItem>
        <my-tabsItem name="test2" :disabled="true">tabsItem2</my-tabsItem>
        <my-tabsItem name="test3">tabsItem3</my-tabsItem>
        <template slot="actions">设置</template>
      </my-tabsHead>
      <my-tabsBody>
        <my-tabsPanel name="test1">tabsPanel1</my-tabsPanel>
        <my-tabsPanel name="test2">tabsPanel2</my-tabsPanel>
        <my-tabsPanel name="test3">tabsPanel3</my-tabsPanel>
      </my-tabsBody>
    </my-tabs>
  </div>
</template>

<script>
export default {
  name: "tabApp",
  data() {
    return {
      selectedTab: "sports",
    };
  },
};
</script>

<style lang="less" scoped>
#tabApp {
  margin: 20px;
}
</style>