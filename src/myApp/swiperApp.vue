<template>
  <div id="swiperApp">
    <my-swiper
      :autoPlay="true"
      :duration="3000"
      :initial="0"
      :hasDot="true"
      director="next"
      dotBgColor="#000"
    >
      <my-swiperItem v-for="item in 3" :key="item">
        <div :class="`content${item}`">content{{ item }}</div>
      </my-swiperItem>
    </my-swiper>
  </div>
</template>

<script>
import swiper from "../myComponents/swiper/swiper.vue";
import swiperItem from "../myComponents/swiper/swiperItem.vue";

export default {
  name: "swiperApp",
  components: { "my-swiper": swiper, "my-swiperItem": swiperItem },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
#swiperApp {
  margin: 20px;
  width: 520px;
  height: 280px;

  .content1 {
    height: 100%;
    width: 100%;
    background-color: goldenrod;
  }
  .content2 {
    height: 100%;
    width: 100%;
    background-color: violet;
  }
  .content3 {
    height: 100%;
    width: 100%;
    background-color: sandybrown;
  }
}
</style>