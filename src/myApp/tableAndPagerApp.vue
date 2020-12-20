<template>
  <div id="pagerApp">
    <div>
      <my-table
        :columns="columns"
        :dataSource="dataSource"
        :orderBy.sync="sortRules"
        @update:orderBy="x"
        :loading="loading"
        :height="300"
        expendFileld="description"
      >
        <template slot-scope="xxx">
          <button @click="edit(xxx.item)">编辑</button>
          <button @click="view(xxx.item)">查看</button>
        </template>
      </my-table>
      <my-table
        :columns="columns"
        :dataSource="dataSource"
        :border="true"
        :compact="true"
        :striped="false"
        :height="300"
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

      columns: [
        { text: "姓名", field: "name", width: 60 },
        { text: "分数", field: "score", width: 50 },
      ],
      dataSource: [
        { id: 3, name: "张三", score: 100, description: "张三 id: 3" },
        { id: 4, name: "李四", score: 99, description: "李四 id: 4" },
        { id: 5, name: "超人", score: 100 },
        { id: 6, name: "蝙蝠侠", score: 99 },
        { id: 7, name: "蜘蛛侠", score: 100 },
        { id: 8, name: "钢铁侠", score: 99 },
        { id: 9, name: "方方", score: 100 },
        { id: 10, name: "圆圆", score: 99 },
        { id: 11, name: "张三", score: 100 },
        { id: 12, name: "李四", score: 99 },
        { id: 13, name: "超人", score: 100 },
        { id: 14, name: "蝙蝠侠", score: 99 },
        { id: 15, name: "蜘蛛侠", score: 100 },
        { id: 16, name: "钢铁侠", score: 99 },
        { id: 17, name: "蜘蛛侠", score: 100 },
        { id: 18, name: "钢铁侠", score: 99 },
        { id: 19, name: "方方", score: 100 },
        { id: 20, name: "圆圆", score: 99 },
      ],
    };
  },

  methods: {
    x(copy) {
      this.loading = true;
      setTimeout(() => {
        this.dataSource = this.dataSource.sort((a, b) => a.score - b.score);
        this.loading = false;
      }, 2000);
    },

    edit(item) {
      console.log("edit");
    },

    view(item) {
      console.log("view");
    },
  },
};
</script>

<style lang="scss" scoped>
#pagerApp {
  margin: 20px;
}
</style>
