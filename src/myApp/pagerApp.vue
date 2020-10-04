<template>
  <div id="pagerApp">
    <my-pager :totalPage="10" :currentPage.sync="currentPage" />
  </div>
</template>

<script>
export default {
  name: "pagerApp",
  data() {
    return {
      currentPage: 2,
    };
  },
};
</script>

<style lang="scss" scoped>
#pagerApp {
  margin: 20px;
}
</style>