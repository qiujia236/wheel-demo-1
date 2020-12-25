<template>
  <div class="my-tabsBody">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-tabsBody",
  inject: ["eventBus"],
};
</script>