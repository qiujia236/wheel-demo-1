<template>
  <div class="radioApp">
    <my-radio label="1" v-model="gender">男</my-radio>
    <my-radio label="0" v-model="gender">女</my-radio>

    <my-radioGroup v-model="test">
      <my-radio label="1"></my-radio>
      <my-radio label="0"></my-radio>
    </my-radioGroup>
  </div>
</template>

<script>
export default {
  name: "radioApp",
  data() {
    return {
      gender: "0",
      test: "1",
    };
  },
};
</script>

<style lang="scss" scoped>
.radioApp {
  margin-left: 20px;
}
</style>