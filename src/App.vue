<template>
  <div id="app">
    <my-button @myClick="fn">我的button</my-button>
    <my-input v-model="name" />
    {{ name }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "UI组件--myself",
    };
  },
  methods: {
    fn() {
      console.log("fn");
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
