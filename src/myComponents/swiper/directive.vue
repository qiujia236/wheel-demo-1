<template>
  <div class="directive">
    <div class="director dir-next" v-if="dir === 'next'">
      <a href="javascript:;" @click="dirClick(dir)">
        <icon name="right"></icon>
      </a>
    </div>
    <div class="director dir-prev" v-if="dir === 'prev'">
      <a href="javascript:;" @click="dirClick(dir)">
        <icon name="left"></icon>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  name: "my-directive",
  props: {
    dir: {
      type: String,
      required: true,
    },
  },

  methods: {
    dirClick(dir) {
      this.$emit("dirClick", dir);
    },
  },
};
</script>

<style lang="less" scoped>
.director {
  position: absolute;
  top: 50%;
  z-index: 1;
  margin-top: -15px;
  width: 20px;
  height: 30px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);

  a {
    color: #ffffff;
    text-decoration: none;
  }

  &.dir-next {
    right: 0;
  }
  &.dir-prev {
    left: 0;
  }
}
</style>