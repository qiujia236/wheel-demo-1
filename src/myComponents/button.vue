<template>
  <button class="g-button">提交</button>
</template>

<script>
export default {
  name: "g-button",
};
</script>

<style lang="less">
:root {
  --button-height: 42px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --boreder-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--boreder-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>
