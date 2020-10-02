<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
    <div class="popover" v-if="!popoverVisible">
      <my-cascaderItems :items="source" />
    </div>
  </div>
</template>

<script>
export default {
  name: "my-cascader",
  props: {
    source: {
      type: Array,
    },
  },

  data() {
    return {
      popoverVisible: false,
      level1Selected: null,
      level2Selected: null,
    };
  },

  computed: {
    level2Items() {
      if (this.level1Selected) {
        return this.level1Selected.children;
      } else {
        return [];
      }
    },

    level3Items() {
      if (this.level2Selected) {
        return this.level2Selected.children;
      } else {
        return [];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../var";
.cascader {
  .trigger {
  }
  .popover {
  }
}
</style>
