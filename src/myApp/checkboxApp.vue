<template>
  <div>
    <my-checkbox v-model="active">是否选中</my-checkbox>
    <my-checkboxGroup v-model="hobby">
      <my-checkbox label="吃饭"></my-checkbox>
      <my-checkbox label="看电影"></my-checkbox>
      <my-checkbox label="读书"></my-checkbox>
    </my-checkboxGroup>
  </div>
</template>

<script>
export default {
  name: "checkboxApp",
  data() {
    return {
      active: true,
      hobby: ["吃饭"],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>