<template>
  <div class="my-selector" v-focus>
    <my-selector-input
      :placeholder="placeholder"
      :value="inputValue"
      @searchOptions="searchOptions"
    />
    <my-selector-menu
      :itemData="itemData"
      @setItemValue="setItemValue"
      :searchValue="searchValue"
    />
  </div>
</template>

<script>
import focus from "./focus.js";

export default {
  name: "my-selector",
  directives: { focus },
  props: {
    placeholder: {
      type: String,
      default: "请选择",
    },
    itemData: Array,
  },

  data() {
    return { inputValue: "", searchValue: "" };
  },

  methods: {
    setItemValue(item) {
      this.inputValue = item.text;
    },

    searchOptions(value) {
      this.searchValue = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.my-selector {
  position: relative;
  width: 300px;
}
</style>