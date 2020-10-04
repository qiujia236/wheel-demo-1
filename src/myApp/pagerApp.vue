<template>
  <div id="pagerApp"><my-pager :totalPage="10" :currentPage="2" /></div>
</template>

<script>
export default {
  name: "pagerApp",
};
</script>

<style lang="scss" scoped>
#pagerApp {
  margin: 20px;
}
</style>