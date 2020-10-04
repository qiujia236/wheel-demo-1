<template>
  <div class="selector-menu">
    <template v-if="searchData.length > 0">
      <div
        class="menu-item"
        v-for="(item, index) in searchData"
        :key="index"
        @click="setItemValue(item)"
      >
        <template>{{ item.text }}</template>
      </div>
    </template>
    <template v-else>
      <div class="menu-item"><template>没有搜索到数据</template></div>
    </template>
  </div>
</template>

<script>
export default {
  name: "my-selector-menu",
  props: {
    itemData: {
      type: Array,
      default: () => [{ id: 1, value: "1", text: "选项1" }],
    },
    searchValue: String,
  },

  computed: {
    searchData() {
      if (this.searchValue) {
        return this.itemData.filter((item) => {
          return item.text
            .toLowerCase()
            .includes(this.searchValue.toLowerCase());
        });
      } else {
        return this.itemData;
      }
    },
  },

  methods: {
    setItemValue(item) {
      this.$emit("setItemValue", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.selector-menu {
  display: none;
  position: absolute;
  left: 0;
  top: 38px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px #dddddd;
  border-radius: 5px;
  cursor: pointer;

  .menu-item {
    height: 35px;
    padding: 0 5px;
    line-height: 35px;
    font-size: 14px;
    color: #666;
    margin: 10px 0;
    transition: background-color 0.2s linear;
    &:hover {
      background-color: #ecf0f1;
    }
  }
}
</style>