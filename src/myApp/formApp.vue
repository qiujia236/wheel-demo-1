<template>
  <div>
    <my-form :model="model" label-width="70px">
      <my-formItem label="用户名">
        <my-input
          placeholder="请输入用户名"
          v-model="model.username"
        ></my-input>
      </my-formItem>
      <my-formItem label="选择">
        <my-switch v-model="model.active"></my-switch>
      </my-formItem>
    </my-form>
  </div>
</template>

<script>
export default {
  name: "formApp",
  data() {
    return {
      model: { username: "", active: false },
    };
  },
};
</script>

<style>
</style>