<template>
  <button class="my-button" :class="`icon-${iconPosition}`">
    <svg class="icon" v-if="iconProps">
      <use :xlink:href="`#${iconProps}`" />
    </svg>
    <div class="content">
      <slot>提交</slot>
    </div>
  </button>
</template>

<script>
import down from "../assets/icons/down.svg";
import download from "../assets/icons/download.svg";
import left from "../assets/icons/left.svg";
import right from "../assets/icons/right.svg";
import setting from "../assets/icons/setting.svg";
import thumsUp from "../assets/icons/thumsUp.svg";

export default {
  name: "my-button",
  props: ["iconProps", "iconPosition"],
};
</script>

<style lang="less">
:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --boreder-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
.my-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 0.7em;
  border-radius: var(--boreder-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  margin: 0 5px;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    height: 1em;
    width: 1em;
    margin-right: 0.3em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }
  }
}
</style>
