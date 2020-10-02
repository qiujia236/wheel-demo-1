<template>
  <div class="cascaderApp">
    {{ selected }}
    <my-cascader
      :source="source"
      :selected="selected"
      popoverHeight="200px"
      @updateSelected="updateSelected"
    ></my-cascader>
  </div>
</template>

<script>
export default {
  name: "cascaderApp",
  data() {
    return {
      selected: [],
      source: [
        {
          name: "浙江",
          children: [
            {
              name: "杭州",
              children: [{ name: "上城" }, { name: "下城" }, { name: "江干" }],
            },
            {
              name: "嘉兴",
              children: [
                { name: "南湖区" },
                { name: "秀洲" },
                { name: "嘉善" },
              ],
            },
          ],
        },
        {
          name: "湖北",
          children: [
            {
              name: "武汉",
              children: [
                { name: "汉口" },
                { name: "汉阳" },
                { name: "东西湖" },
              ],
            },
          ],
        },
      ],
    };
  },

  methods: {
    updateSelected(newSelected) {
      this.selected = newSelected;
      console.log(this.selected);
    },
  },
};
</script>

<style lang="scss" scoped>
.cascaderApp {
  margin: 20px;
}
</style>
