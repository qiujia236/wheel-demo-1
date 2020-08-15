<template>
  <div id="collapseApp">
    <my-collapse :selected.sync="selectedTab" single>
      <my-collapseItem title="标题1" name="1">内容1</my-collapseItem>
      <my-collapseItem title="标题2" name="2">内容2</my-collapseItem>
      <my-collapseItem title="标题3" name="3">内容3</my-collapseItem>
    </my-collapse>
    {{selectedTab}}
  </div>
</template>

<script>
export default {
  name: "collapseApp",
  data() {
    return { selectedTab: ["2"] };
  },
};
</script>

<style lang="less" scoped>
#collapseApp {
  margin: 20px;
}
</style>