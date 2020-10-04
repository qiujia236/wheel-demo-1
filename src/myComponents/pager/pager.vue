<template>
  <div class="pager">
    <div
      class="pager-item"
      :class="{ active: page === currentPage }"
      v-for="(page, index) in pages"
      :key="index"
    >
      {{ page }}
    </div>
  </div>
</template>

<script>
function unique(array) {
  // return [...new Set(array)]
  // array = [1 1 2 3 4 5 20]
  const object = {};
  array.map((number) => {
    object[number] = true;
  });
  const arr = Object.keys(object).map((s) => parseInt(s, 10));
  return arr;
}

export default {
  name: "my-pager",
  props: {
    totalPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    hideIfOnePage: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    pages() {
      // 依赖了 totalPage 和 currentPage
      return unique(
        [
          1,
          this.totalPage,
          this.currentPage,
          this.currentPage - 1,
          this.currentPage - 2,
          this.currentPage + 1,
          this.currentPage + 2,
        ]
          .filter((n) => n >= 1 && n <= this.totalPage)
          .sort((a, b) => a - b)
      ).reduce((prev, current, index, array) => {
        prev.push(current);
        array[index + 1] !== undefined &&
          array[index + 1] - array[index] > 1 &&
          prev.push("...");
        return prev;
      }, []);
    },
  },

  methods: {
    onClickPage(n) {
      if (n >= 1 && n <= this.totalPage) {
        this.$emit("update:currentPage", n);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pager {
  display: flex;
  cursor: default;
  .pager-item {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    min-width: 20px;
    border: 1px solid #bdc3c7;
    border-radius: 3px;
    padding: 0 4px;
    margin: 0 2px;
  }
  .active,
  .active:hover {
    background-color: #3498db;
  }
}
</style>