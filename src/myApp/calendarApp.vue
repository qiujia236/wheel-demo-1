<template>
  <div id="calendarApp">
    <my-dataPicker v-model="now"></my-dataPicker>
  </div>
</template>

<script>
export default {
  name: "calendarApp",
  data() {
    return {
      now: new Date(),
    };
  },
};
</script>

<style lang="less" scoped>
#calendarApp {
  margin: 20px;
}
</style>