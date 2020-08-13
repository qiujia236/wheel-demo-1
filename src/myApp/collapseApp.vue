<template>
  <div id="collapseApp">
    <my-collapse>
      <my-collapseItem title="标题1">内容1</my-collapseItem>
      <my-collapseItem title="标题2">内容2</my-collapseItem>
      <my-collapseItem title="标题3">内容3</my-collapseItem>
    </my-collapse>
  </div>
</template>

<script>
export default {
  name: "collapseApp",
};
</script>

<style lang="less" scoped>
#collapseApp {
  margin: 20px;
}
</style>