<template>
  <div class="wheel-sticky-wrapper" ref="wrapper">
    <div
      class="wheel-sticky"
      :class="[classes, { center }]"
      :style="{ left, width, top }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-sticky",
  props: {
    distance: {
      type: Number,
      default: 0,
    },
    center: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sticky: false,
      left: undefined,
      width: undefined,
      height: undefined,
      top: undefined,
    };
  },

  computed: {
    classes() {
      return {
        sticky: this.sticky,
      };
    },
  },

  mounted() {
    this.windowScrollHandler = this._windowScrollHandler.bind(this);
    window.addEventListener("scroll", this.windowScrollHandler);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.windowScrollHandler);
  },

  methods: {
    offsetTop() {
      let { top } = this.$refs.wrapper.getBoundingClientRect();
      return { top: top + window.scrollY };
    },

    _windowScrollHandler() {
      let { top } = this.offsetTop();

      if (window.scrollY > top) {
        let {
          height,
          left,
          width,
        } = this.$refs.wrapper.getBoundingClientRect();

        this.height = height + "px";
        this.left = left + "px";
        this.width = width + "px";
        this.top = this.distance + "px";
        this.sticky = true;
      } else {
        this.height = undefined;
        this.left = undefined;
        this.width = undefined;
        this.top = undefined;
        this.sticky = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.wheel-sticky {
  &.center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.sticky {
    position: fixed;
  }
}
</style>