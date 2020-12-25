<template>
  <div class="reSubMenu" @click.stop="x">
    <my-subMenu>
      <template #title>{{ data.title }}</template>
      <template v-for="c of data.children">
        <my-treeItem v-if="!c.children" :key="`treeItem${c.id}`">{{
          c.title
        }}</my-treeItem>
        <my-reSubMenu v-else :key="`reSubMenu${c.id}`" :data="c"></my-reSubMenu>
      </template>
    </my-subMenu>
  </div>
</template>

<script>
import treeItem from "./treeItem";
import subMenu from "./subMenu";
import { EventBus } from "./eventBus.js";

export default {
  name: "my-reSubMenu",
  components: {
    "my-treeItem": treeItem,
    "my-subMenu": subMenu,
  },
  props: {
    data: Object,
  },
  methods: {
    x() {
      console.log("aaa");
      let data = JSON.parse(JSON.stringify(this.data));
      console.log(data.title);
      // EventBus.$emit("dataMsg", data.title);
    },
  },
};
</script>