<template>
  <div id="cascaderApp">
    <my-cascader :source="school" :selected.sync="selected"></my-cascader>
  </div>
</template>

<script>
import { school } from "../myComponents/cascader/school.js";

export default {
  name: "cascaderApp",
  data() {
    return { school, selected: [] };
  },
};
</script>

<style>
#cascaderApp {
  margin: 20px;
}
</style>