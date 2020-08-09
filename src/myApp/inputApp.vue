<template>
  <div id="inputApp">
    <h2>{{value}}</h2>
    <my-input v-model="value"></my-input>
    <my-input></my-input>
    <my-input value="只读状态" :readonly="true"></my-input>
    <my-input value="禁止状态" :disabled="true"></my-input>
    <my-input value="错误状态" error="姓名不能少于两个字"></my-input>
  </div>
</template>

<script>
export default {
  name: "inputApp",
  data() {
    return {
      value: "双向绑定",
    };
  },
  methods: {
    inputChange(ev) {
      console.log(ev.target.value);
    },
  },
};
</script>

<style lang="less" scoped>
#inputApp {
  margin: 20px;
}
</style>
