<template>
  <div id="navApp">
    <my-nav :selected.sync="selected">
      <my-navItem name="home">首页</my-navItem>
      <my-subNav name="about">
        <template slot="title">关于</template>
        <my-navItem name="culture">企业文化</my-navItem>
        <my-navItem name="developers">开发团队</my-navItem>
        <my-subNav name="contacts">
          <template slot="title">联系方式</template>
          <my-navItem name="wechat">微信</my-navItem>
          <my-navItem name="qq">QQ</my-navItem>
          <my-navItem name="phone">电话</my-navItem>
        </my-subNav>
      </my-subNav>
      <my-navItem name="hire">招聘</my-navItem>
    </my-nav>
  </div>
</template>

<script>
import nav from "../myComponents/menu/nav.vue";
import subNav from "../myComponents/menu/subNav.vue";
import navItem from "../myComponents/menu/navItem.vue";

export default {
  name: "menuApp",
  components: {
    "my-nav": nav,
    "my-subNav": subNav,
    "my-navItem": navItem,
  },
  data() {
    return {
      selected: ["hire"],
    };
  },
};
</script>

<style lang="scss" scoped>
#navApp {
  margin: 20px;
}
</style>
