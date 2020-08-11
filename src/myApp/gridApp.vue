<template>
  <div id="gridApp">
    <my-row>
      <my-col span="2" :phone="{span:12}">2</my-col>
      <my-col span="20" offset="2" :phone="{span:12,offset:1}">22</my-col>
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
