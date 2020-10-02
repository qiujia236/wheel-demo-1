<template>
  <div class="cascaderItem" :style="{ height: height }">
    <div class="left">
      <div
        class="label"
        v-for="(item, index) in items"
        :key="index"
        @click="onClickLabel(item)"
      >
        <span>{{ item.name }}</span>
        <icon v-if="item.children" name="right" class="right-icon"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <my-cascaderItems
        ref="right"
        :items="rightItems"
        :height="height"
        :level="level + 1"
        :selected="selected"
        @updateSelected="updateSelected"
      />
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
    height: {
      type: String,
    },
    selected: {
      type: Array,
      default: () => [],
    },
    level: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    rightItems() {
      let currentSelected = this.selected[this.level];
      if (currentSelected && currentSelected.children) {
        return currentSelected.children;
      } else {
        return null;
      }
    },
  },

  methods: {
    onClickLabel(item) {
      let copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      copy.splice(this.level + 1);
      this.$emit("updateSelected", copy);
    },

    updateSelected(newSelected) {
      this.$emit("updateSelected", newSelected);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../var";

.cascaderItem {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  .left {
    height: 100%;
    padding: 0.3em 0;
  }
  .right {
    height: 100%;
    border-left: 1px solid lighten($border-color, 10%);
  }
  .label {
    padding: 0.3em 1em;
    display: flex;
    align-items: center;

    .right-icon {
      margin-left: 0.3em;
      transform: scale(0.7);
    }
  }
}
</style>
