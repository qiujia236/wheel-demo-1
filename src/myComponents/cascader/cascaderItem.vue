<template>
  <div class="my-cascaderItem">
    <div class="item-wrapper" v-if="source.children && source.children.length">
      <div v-for="item in source.children" :key="item.value" class="x-item">
        <div
          @click="onClick(item)"
          class="x-label"
          :class="{ active: selected.indexOf(item.label) > -1 }"
        >
          <span>{{ item.label }}</span>
          <icon name="right" class="x-icon" v-if="item.children"></icon>
        </div>
      </div>
    </div>

    <div class="children-wrapper" v-if="childrenItem">
      <my-cascaderItem
        class="children-item"
        :source="childrenItem"
        :level="level + 1"
        v-if="
          childrenItem.children && selected.indexOf(childrenItem.label) > -1
        "
        :selected="selected"
        @update:selected="onUpdate($event)"
      ></my-cascaderItem>
    </div>
  </div>
</template>

<script>
import icon from "../icon/icon.vue";

export default {
  name: "my-cascaderItem",
  components: { icon },
  props: {
    source: { type: Object },
    selected: { type: Array, default: () => [] },
    level: { type: Number, default: 0 },
  },
  inject: ["eventBus"],

  data() {
    return { childrenItem: null };
  },

  methods: {
    onClick(item) {
      this.childrenItem = item;
      this.$emit("update:selected", { label: item.label, level: this.level });
      if (!this.source.children[0].children) {
        this.eventBus.$emit("close-options");
      }
    },

    onUpdate(obj) {
      this.$emit("update:selected", obj);
    },
  },
};
</script>

<style scoped lang="scss">
.my-cascaderItem {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: stretch;

  > .item-wrapper {
    height: 100%;

    > .x-item {
      width: 100px;
      > .x-label {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0.1em 0.2em;
        > span {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        > .x-icon {
          margin-left: auto;
          flex-shrink: 0;
        }

        &.active {
          background: rgba(0, 0, 0, 0.04);
          color: #36b1bf;
        }
        &:hover {
          background: rgba(0, 0, 0, 0.04);
        }
      }
    }
  }

  > .children-wrapper {
    height: 100%;
    flex-grow: 1;
  }
}
</style>