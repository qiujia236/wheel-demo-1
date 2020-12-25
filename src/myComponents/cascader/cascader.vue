<template>
  <div class="x-cascader">
    <div class="selected" @click="showOptions">
      <div class="value">{{ addr }}</div>
      <icon
        name="down"
        class="x-icon"
        :class="{ active: optionsVisible }"
        v-show="!selected.length"
      ></icon>
      <icon
        name="error"
        class="x-icon close"
        v-show="selected.length"
        @click.stop="clearSelected"
      ></icon>
    </div>
    <!-- 级联选项 -->
    <div class="cascader-options" v-show="optionsVisible">
      <my-cascader-item
        :source="source"
        :selected="selected"
        @update:selected="onUpdate($event)"
      ></my-cascader-item>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import icon from "../icon/icon.vue";
import cascaderItem from "./cascaderItem.vue";

export default {
  name: "my-cascader",
  components: { icon, "my-cascader-item": cascaderItem },
  props: {
    source: { type: Object },
    selected: { type: Array, default: () => [] },
  },

  provide() {
    return { eventBus: this.eventBus };
  },

  data() {
    return { optionsVisible: false, eventBus: new Vue() };
  },

  computed: {
    addr() {
      return this.selected.join(",");
    },
  },

  mounted() {
    this.eventBus.$on("close-options", this.closeOptions);
  },

  methods: {
    onUpdate(obj) {
      let copy = [...this.selected];
      copy[obj.level] = obj.label;
      copy = copy.slice(0, obj.level + 1);
      this.$emit("update:selected", copy);
    },

    showOptions() {
      this.optionsVisible = !this.optionsVisible;
    },

    clearSelected() {
      this.$emit("update:selected", []);
      this.closeOptions();
    },

    closeOptions() {
      this.optionsVisible = false;
    },

    listenDocument(e) {
      if (!this.$el.contains(e.target)) {
        this.closeOptions();
      }
    },
  },

  watch: {
    optionsVisible(val) {
      if (val) {
        document.addEventListener("click", this.listenDocument);
      } else {
        document.removeEventListener("click", this.listenDocument);
      }
    },
  },

  beforeDestroy() {
    this.eventBus.$off("close-options", this.closeOptions);
    document.removeEventListener("click", this.listenDocument);
  },
};
</script>

<style scoped lang="scss">
.x-cascader {
  font-size: 15px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.65);
  padding: 0 10px;

  > .selected {
    cursor: pointer;
    position: relative;
    width: 300px;
    > .value {
      height: 30px;
      line-height: 30px;
      padding: 5px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      font-size: 14px;
    }
    > .x-icon {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-50%) rotateZ(-90deg);
      transition: all 0.3s;
      width: 12px;
      height: 12px;
      &.active {
        transform: translateY(-50%) rotateZ(90deg);
        transition: all 0.3s;
      }
      &.close {
        width: 12px;
        height: 12px;
        &:hover {
          fill: #e84118;
        }
      }
    }
  }

  > .cascader-options {
    position: absolute;
    z-index: 10;
    top: 100%;
    margin-top: 10px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
  }
}
</style>