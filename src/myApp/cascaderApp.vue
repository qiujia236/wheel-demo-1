<template>
  <div class="cascaderApp">
    <my-cascader
      :source="source"
      :selected.sync="selected"
      popoverHeight="300px"
      :loadData="loadData"
      @update:selected="xxx"
    ></my-cascader>
  </div>
</template>

<script>
import db from "../myComponents/cascader/db.js";

function ajax(parentId = 0) {
  return new Promise((success, fail) => {
    let result = db.filter((item) => item.parent_id === parentId);
    success(result);
  });
}

export default {
  name: "cascaderApp",
  data() {
    return {
      selected: [],
      source: [],
    };
  },

  methods: {
    loadData(node, fn) {
      let { id } = node;

      ajax(id).then((result) => {
        console.log(result);
        fn(result);
      });
    },

    xxx(newSelected) {
      // this.selected = newSelected;
      ajax(newSelected[0].id).then((result) => {
        let lastLevelSelected = this.source.filter(
          (item) => item.id === this.selected[0].id
        )[0];
        this.$set(lastLevelSelected, "children", result);
        console.log(lastLevelSelected);
        // this.selected = [lastLevelSelected];
      });
    },
  },

  async created() {
    let result = await ajax(0);
    this.source = result;
  },
};
</script>

<style lang="scss" scoped>
.cascaderApp {
  margin: 20px;
}
</style>
