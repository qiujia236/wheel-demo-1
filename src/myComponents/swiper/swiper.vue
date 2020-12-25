<template>
  <div class="swiper" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="inner">
      <my-dot
        :hasDot="hasDot"
        :itemLen="itemLen"
        :currentIndex="currentIndex"
        :dotBgColor="dotBgColor"
        @dotClick="dotClick"
      ></my-dot>
      <my-directive dir="prev" @dirClick="dirClick"></my-directive>
      <my-directive dir="next" @dirClick="dirClick"></my-directive>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import dot from "./dot.vue";
import directive from "./directive.vue";

export default {
  name: "my-swiper",
  components: { "my-dot": dot, "my-directive": directive },
  props: {
    autoPlay: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    initial: {
      type: Number,
      default: 0,
    },
    hasDot: {
      type: Boolean,
      default: true,
    },
    director: {
      type: String,
      default: "next",
    },
    dotBgColor: String,
  },

  data() {
    return {
      t: null,
      itemLen: 0,
      currentIndex: this.initial,
    };
  },

  methods: {
    setIndex(dir) {
      if (dir === "next") {
        this.currentIndex += 1;
        if (this.currentIndex === this.itemLen) {
          this.currentIndex = 0;
        }
      } else if (dir === "prev") {
        this.currentIndex -= 1;
        if (this.currentIndex === -1) {
          this.currentIndex = this.itemLen - 1;
        }
      }
    },

    autoplay() {
      if (this.autoPlay) {
        this.t = setInterval(() => {
          this.setIndex(this.director);
        }, this.duration);
      }
    },

    clearAutoplay() {
      clearInterval(this.t);
      this.t = null;
    },

    dotClick(index) {
      this.currentIndex = index;
    },

    mouseEnter() {
      this.clearAutoplay();
    },

    mouseLeave() {
      this.autoplay();
    },

    dirClick(dir) {
      this.setIndex(dir);
    },
  },

  mounted() {
    this.itemLen = this.$slots.default.length;
    this.autoplay();
  },

  beforeDestroy() {
    this.clearAutoplay();
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  height: 100%;
  width: 100%;

  .inner {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
}
</style>
