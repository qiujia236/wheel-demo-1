<template>
  <div id="tabApp">
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
import tabs from "../myComponents/tab/tabs.vue";
import tabsHead from "../myComponents/tab/tabsHead.vue";
import tabsItem from "../myComponents/tab/tabsItem.vue";
import tabsBody from "../myComponents/tab/tabsBody.vue";
import tabsPanel from "../myComponents/tab/tabsPanel.vue";
import icon from "../myComponents/icon/icon.vue";

export default {
  name: "tabApp",
  components: {
    icon,
    "my-tabs": tabs,
    "my-tabsHead": tabsHead,
    "my-tabsItem": tabsItem,
    "my-tabsBody": tabsBody,
    "my-tabsPanel": tabsPanel,
  },
  data() {
    return {
      selectedTab: "test3",
    };
  },
};
</script>

<style lang="scss" scoped>
#tabApp {
  margin: 20px;
}
</style>