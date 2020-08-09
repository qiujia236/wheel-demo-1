<template>
  <div id="app">
    <my-button
      :loading="loading1"
      @click="loading1 = !loading1"
      icon-props="down"
      icon-position="right"
      >down</my-button
    >
    <my-button
      :loading="loading2"
      @click="loading2 = !loading2"
      icon-props="download"
      >download</my-button
    >
    <my-button
      :loading="loading3"
      @click="loading3 = !loading3"
      icon-props="left"
      icon-position="left"
      >left</my-button
    >
    <my-button
      :loading="loading4"
      @click="loading4 = !loading4"
      icon-props="right"
      icon-position="left"
      >right</my-button
    >
    <my-button
      :loading="loading5"
      @click="loading5 = !loading5"
      icon-props="setting"
      icon-position="left"
      >setting</my-button
    >
    <my-button
      :loading="loading6"
      @click="loading6 = !loading6"
      icon-props="thumsUp"
      icon-position="left"
      >thumsUp</my-button
    >
    <my-button :loading="true">loading</my-button>
    <my-button-group>
      <my-button
        :loading="loading3"
        @click="loading3 = !loading3"
        icon-props="left"
        icon-position="left"
        >left</my-button
      >
      <my-button
        :loading="loading5"
        @click="loading5 = !loading5"
        icon-props="setting"
        icon-position="left"
        >setting</my-button
      >
      <my-button
        :loading="loading4"
        @click="loading4 = !loading4"
        icon-props="right"
        icon-position="left"
        >right</my-button
      >
    </my-button-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
      loading6: false,
    };
  },
};
</script>

<style lang="less">
#app {
  margin: 20px;
}
</style>
