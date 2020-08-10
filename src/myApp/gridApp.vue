<template>
  <div id="gridApp">
    <my-row gutter="20">
      <my-col>12</my-col>
      <my-col>12</my-col>
    </my-row>
    <my-row gutter="20">
      <my-col>8</my-col>
      <my-col>8</my-col>
      <my-col>8</my-col>
    </my-row>
    <my-row align="right">
      <my-col span="4">4</my-col>
      <my-col span="18" offset="2">20</my-col>
    </my-row>
    <my-row>
      <my-col span="4">4</my-col>
      <my-col span="8" offset="2">10</my-col>
      <my-col span="8" offset="2">10</my-col>
    </my-row>
    <my-row>
      <my-col span="3">3</my-col>
      <my-col span="7" offset="4">11</my-col>
      <my-col span="8" offset="2">10</my-col>
    </my-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#gridApp {
  margin: 20px;
}
</style>