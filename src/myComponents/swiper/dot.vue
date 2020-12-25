<template>
  <div class="dot" v-if="hasDot">
    <div class="dot-item" v-for="item in itemLen" :key="item">
      <a
        href="javascript:;"
        class="dot-lk"
        :style="{
          backgroundColor: item - 1 === currentIndex ? dotBgColor : '#fff',
        }"
        @click="dotClick(item - 1)"
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-dot",
  props: {
    hasDot: { type: Boolean, default: true },
    currentIndex: { type: Number, default: true },
    dotBgColor: { type: String, default: "#30336b" },
    itemLen: { type: Number, reqired: true },
  },

  methods: {
    dotClick(index) {
      this.$emit("dotClick", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.dot {
  width: 70px;
  height: 15px;
  border-radius: 10px;
  position: absolute;
  bottom: 15px;
  text-align: center;
  font-size: 0;
  left: 50%;
  z-index: 1;
  margin-left: -39px;
  background-color: #eb4d4b;

  .dot-item {
    display: inline-block;
    margin: 3px;

    .dot-lk {
      display: block;
      padding-top: 8px;
      width: 8px;
      height: 0;
      border-radius: 50%;
      background-color: #fff;
    }
  }
}
</style>