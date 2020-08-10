<template>
  <div
    class="col"
    :data-span="span"
    :data-offset="offset"
    :style="gutter && {paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}"
  >
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-col",
  props: {
    span: { type: [Number, String] },
    offset: { type: [Number, String] },
  },
  data() {
    return { gutter: 0 };
  },
};
</script>

<style lang="less" scoped>
.col {
  height: 100px;
  width: 50%;
  //   background-color: wheat;
  //   border: 1px solid red;
  //   padding: 0 10px;
  margin-bottom: 5px;
  > .wrapper {
    border: 1px solid green;
    height: 100px;
  }
}

.col[data-span="1"] {
  width: 4.1666665%;
}
.col[data-span="2"] {
  width: 8.333333%;
}
.col[data-span="3"] {
  width: 12.499999%;
}
.col[data-span="4"] {
  width: 16.666666%;
}
.col[data-span="5"] {
  width: 20.833332%;
}
.col[data-span="6"] {
  width: 24.999999%;
}
.col[data-span="7"] {
  width: 29.166666%;
}
.col[data-span="8"] {
  width: 33.333332%;
}
.col[data-span="9"] {
  width: 37.499998%;
}
.col[data-span="10"] {
  width: 41.666665%;
}
.col[data-span="11"] {
  width: 45.833331%;
}
.col[data-span="12"] {
  width: 49.999998%;
}
.col[data-span="13"] {
  width: 54.166664%;
}
.col[data-span="14"] {
  width: 58.333331%;
}
.col[data-span="15"] {
  width: 62.499997%;
}
.col[data-span="16"] {
  width: 66.666664%;
}
.col[data-span="17"] {
  width: 70.833331%;
}
.col[data-span="18"] {
  width: 74.999997%;
}
.col[data-span="19"] {
  width: 79.166663%;
}
.col[data-span="20"] {
  width: 83.33333%;
}
.col[data-span="21"] {
  width: 87.499996%;
}
.col[data-span="22"] {
  width: 91.666663%;
}
.col[data-span="23"] {
  width: 95.833329%;
}
.col[data-span="24"] {
  width: 99.999996%;
}

.col[data-offset="1"] {
  margin-left: 4.166666%;
}
.col[data-offset="2"] {
  margin-left: 8.333333%;
}
.col[data-offset="3"] {
  margin-left: 12.499999%;
}
.col[data-offset="4"] {
  margin-left: 16.666666%;
}
.col[data-offset="5"] {
  margin-left: 20.833332%;
}
.col[data-offset="6"] {
  margin-left: 24.999999%;
}
.col[data-offset="7"] {
  margin-left: 29.166666%;
}
.col[data-offset="8"] {
  margin-left: 33.333332%;
}
.col[data-offset="9"] {
  margin-left: 37.499998%;
}
.col[data-offset="10"] {
  margin-left: 41.666665%;
}
.col[data-offset="11"] {
  margin-left: 45.833331%;
}
.col[data-offset="12"] {
  margin-left: 49.999998%;
}
.col[data-offset="13"] {
  margin-left: 54.166664%;
}
.col[data-offset="14"] {
  margin-left: 58.333331%;
}
.col[data-offset="15"] {
  margin-left: 62.499997%;
}
.col[data-offset="16"] {
  margin-left: 66.666664%;
}
.col[data-offset="17"] {
  margin-left: 70.833331%;
}
.col[data-offset="18"] {
  margin-left: 74.999997%;
}
.col[data-offset="19"] {
  margin-left: 79.166663%;
}
.col[data-offset="20"] {
  margin-left: 83.33333%;
}
.col[data-offset="21"] {
  margin-left: 87.499996%;
}
.col[data-offset="22"] {
  margin-left: 91.666663%;
}
.col[data-offset="23"] {
  margin-left: 95.833329%;
}
.col[data-offset="24"] {
  margin-left: 99.999996%;
}
</style>