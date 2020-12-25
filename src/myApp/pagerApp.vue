<template>
  <div>
    <my-pager :totalPage="50" :currentPage.sync="current1" :singleHide="pager1">
    </my-pager>
    <my-pager :totalPage="6" :currentPage.sync="current2"> </my-pager>
  </div>
</template>

<script>
import pager from "../myComponents/pager/pager.vue";

export default {
  name: "pagerApp",
  components: {
    "my-pager": pager,
  },
  data() {
    return {
      current1: 3,
      current2: 2,
      pager1: false,
    };
  },
};
</script>

<style>
</style>