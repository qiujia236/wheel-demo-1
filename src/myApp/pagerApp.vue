<template>
  <div id="pagerApp">
    <div>
      <my-table
        :columns="columns"
        :dataSource="dataSource"
        :selectedItems.sync="selectedItems1"
        :orderBy.sync="sortRules"
        @update:orderBy="x"
        :loading="loading"
      />
      <my-table
        :columns="columns"
        :dataSource="dataSource"
        :border="true"
        :compact="true"
        :striped="false"
        :selected-items.sync="selectedItems2"
      />
    </div>
    <div>
      <my-pager :totalPage="10" :currentPage.sync="currentPage" />
    </div>
  </div>
</template>

<script>
export default {
  name: "pagerApp",
  data() {
    return {
      currentPage: 2,
      loading: false,
      sortRules: {
        score: "desc",
      },

      selectedItems1: [],
      selectedItems2: [],

      columns: [
        { text: "姓名", field: "name" },
        { text: "分数", field: "score" },
      ],

      dataSource: [
        { id: 3, name: "张三", score: 100 },
        { id: 4, name: "李四", score: 99 },
        { id: 5, name: "超人", score: 100 },
      ],
    };
  },

  methods: {
    x(copy) {
      this.loading = true;
      console.log(copy);
      setTimeout(() => {
        this.dataSource = this.dataSource.sort((a, b) => a.score - b.score);
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
#pagerApp {
  margin: 20px;
}
</style>
