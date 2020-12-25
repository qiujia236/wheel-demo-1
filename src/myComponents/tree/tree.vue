<template>
  <div class="tree">
    <template v-for="item of source">
      <my-treeItem v-if="!item.children" :key="item.id">{{
        item.title
      }}</my-treeItem>
      <my-reSubMenu
        v-else
        :key="`reSubMenu${item.id}`"
        :data="item"
      ></my-reSubMenu>
    </template>
  </div>
</template>

<script>
import treeItem from "./treeItem";
import reSubMenu from "./reSubMenu";
import { EventBus } from "./eventBus.js";

export default {
  name: "my-tree",
  components: {
    "my-treeItem": treeItem,
    "my-reSubMenu": reSubMenu,
  },
  data() {
    return { data: "菜单3-1" };
  },
  props: {
    source: {
      type: Array,
      default: () => {},
    },
  },
  mounted() {
    this.run(this.source);
    EventBus.$on("dataMsg", (msg) => {
      console.log((this.data = msg));
    });
  },
  methods: {
    run(source) {
      for (let i = 0; i < source.length; i++) {
        let item = source[i];
        if (item.title === this.data) {
          console.log(item.id);
        } else {
          if (item.children) {
            this.run(item.children);
          }
        }
      }
    },
  },
  beforeDestroy() {
    EventBus.$off("dataMsg");
  },
};
</script>

<style lang="scss" scoped>
.tree {
  width: 9rem;
  background-color: #57606f;
}
</style>