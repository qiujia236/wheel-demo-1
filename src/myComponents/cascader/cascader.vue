<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{ result }}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <my-cascaderItems
        :items="source"
        :height="popoverHeight"
        :selected="selected"
        @updateSelected="updateSelected"
      />
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
    popoverHeight: {
      type: String,
    },
    selected: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      popoverVisible: false,
    };
  },

  computed: {
    result() {
      return this.selected.map((item) => item.name).join("/");
    },
  },

  methods: {
    updateSelected(newSelected) {
      this.$emit("updateSelected", newSelected);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../var";
.cascader {
  position: relative;
  .trigger {
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
    height: 32px;
    min-width: 10em;
    border: 1px solid $border-color;
    border-radius: 2px;
  }

  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    .label {
      white-space: nowrap;
      @include box-shadow;
    }
  }
}
</style>
