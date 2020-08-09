<template>
  <svg class="icon">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script>
import down from "../assets/icons/down.svg";
import download from "../assets/icons/download.svg";
import left from "../assets/icons/left.svg";
import right from "../assets/icons/right.svg";
import setting from "../assets/icons/setting.svg";
import thumsUp from "../assets/icons/thumsUp.svg";
import loading from "../assets/icons/loading.svg";
import error from "../assets/icons/error.svg";
import success from "../assets/icons/success.svg";

export default {
  name: "icon",
  props: ["name"],
};
</script>

<style lang="less" scoped>
.icon {
  width: 1em;
  height: 1em;
}
</style>