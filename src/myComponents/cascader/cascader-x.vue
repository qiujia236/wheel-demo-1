<template>
  <div class="cascaderItem">
    <div class="left">
      <div
        class="label"
        v-for="(item, index) in items"
        :key="`${index}children`"
        @click="leftSelected = item"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <my-cascaderItems :items="rightItems" />
    </div>
  </div>
</template>

<script>
export default {
  name: "my-cascaderItems",
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {
      leftSelected: null,
    };
  },
  computed: {
    rightItems() {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children;
      } else {
        return null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../var";

.cascaderItem {
  display: flex;
  align-items: flex-start;
  align-items: flex-start;
  .left {
    border: 1px solid red;
  }
  .right {
    margin-top: -1px;
  }
}
</style>
