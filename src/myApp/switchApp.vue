<template>
  <div>
    <my-switch
      v-model="active"
      activeColor="blue"
      inactiveColor="#2c3e50"
      name="username"
    ></my-switch>
    &nbsp;
    <my-switch
      v-model="active1"
      activeColor="#e74c3c"
      inactiveColor="#7f8c8d"
    ></my-switch>
  </div>
</template>

<script>
export default {
  name: "switchApp",
  data() {
    return {
      active: true,
      active1: true,
    };
  },
};
</script>