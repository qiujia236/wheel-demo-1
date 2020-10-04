<template>
  <div class="pager">
    <div
      class="prev-page"
      :class="{ disabled: currentPage === 1 }"
      @click="onClickPage(currentPage - 1)"
    >
      <icon name="left" />
    </div>
    <div
      class="pager-item"
      v-for="(page, index) in pages"
      :key="index"
      :class="{ active: page === currentPage }"
      @click="onClickPage(page)"
    >
      <span>{{ page }}</span>
    </div>
    <div
      class="next-page"
      :class="{ disabled: currentPage === totalPage }"
      @click="onClickPage(currentPage + 1)"
    >
      <icon name="right" />
    </div>
  </div>
</template>

<script>
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
      return this.unique(
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
    unique(array) {
      const object = {};
      array.map((number) => {
        object[number] = true;
      });
      const arr = Object.keys(object).map((s) => parseInt(s, 10));
      return arr;
    },

    onClickPage(n) {
      if (n !== this.currentPage && n !== "...") {
        if (n >= 1 && n <= this.totalPage) {
          this.$emit("update:currentPage", n);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$min-width: 25px;
$height: 25px;
$grey: #ecf0f1;

.pager {
  display: flex;
  align-items: center;
  cursor: default;

  .pager-item {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: $height;
    min-width: $min-width;
    border: 1px solid #bdc3c7;
    border-radius: 4px;
    padding: 0 4px;
    margin: 0 2px;
  }
  .prev-page,
  .next-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $height;
    min-width: $min-width;
    background-color: $grey;
    border-radius: 4px;
    margin: 0 2px;
  }
  .disabled {
    svg {
      fill: darken($grey, 30%);
    }
  }

  .active,
  .active:hover {
    background-color: #3498db;
  }
}
</style>