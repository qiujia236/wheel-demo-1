<template>
  <div>
    <my-nav :selected.sync="selected">
      <my-navItem name="home">首页</my-navItem>
      <my-subNav>
        <template slot="title">关于</template>
        <my-navItem name="culture">企业文化</my-navItem>
        <my-navItem name="developers">开发团队</my-navItem>
        <my-subNav>
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
export default {
  name: "navApp",
  data() {
    return {
      selected: ["hire"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
