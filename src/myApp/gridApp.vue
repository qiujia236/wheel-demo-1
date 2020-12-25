<template>
  <div id="gridApp">
    <my-row class="demoRow" gutter="10">
      <my-col span="8">
        <div class="demoCol">8</div>
      </my-col>
      <my-col span="8">
        <div class="demoCol">8</div>
      </my-col>
      <my-col span="8">
        <div class="demoCol">8</div>
      </my-col>
    </my-row>
    <my-row class="demoRow" gutter="10">
      <my-col span="6">
        <div class="demoCol">6</div>
      </my-col>
      <my-col span="6">
        <div class="demoCol">6</div>
      </my-col>
      <my-col span="6">
        <div class="demoCol">6</div>
      </my-col>
      <my-col span="6">
        <div class="demoCol">6</div>
      </my-col>
    </my-row>
    <br />
    <br />
    <my-row class="demoRow" gutter="10">
      <my-col span="8">
        <div class="demoCol">8</div>
      </my-col>
      <my-col span="8" offset="8">
        <div class="demoCol">8</div>
      </my-col>
    </my-row>
    <my-row class="demoRow" gutter="10">
      <my-col span="6" offset="6">
        <div class="demoCol">6</div>
      </my-col>
      <my-col span="6" offset="6">
        <div class="demoCol">6</div>
      </my-col>
    </my-row>
    <my-row class="demoRow" gutter="10">
      <my-col span="4">
        <div class="demoCol">4</div>
      </my-col>
      <my-col span="4" offset="4">
        <div class="demoCol">4</div>
      </my-col>
      <my-col span="4" offset="8">
        <div class="demoCol">4</div>
      </my-col>
    </my-row>
    <my-row class="demoRow" gutter="10">
      <my-col span="2">
        <div class="demoCol">2</div>
      </my-col>
      <my-col span="2" offset="2">
        <div class="demoCol">2</div>
      </my-col>
      <my-col span="2">
        <div class="demoCol">2</div>
      </my-col>
      <my-col span="2" offset="2">
        <div class="demoCol">2</div>
      </my-col>
      <my-col span="2">
        <div class="demoCol">2</div>
      </my-col>
      <my-col span="2" offset="2">
        <div class="demoCol">2</div>
      </my-col>
      <my-col span="2">
        <div class="demoCol">2</div>
      </my-col>
      <my-col span="2" offset="2">
        <div class="demoCol">2</div>
      </my-col>
    </my-row>
  </div>
</template>

<script>
import row from "../myComponents/grid/row.vue";
import col from "../myComponents/grid/col.vue";

export default {
  components: {
    "my-row": row,
    "my-col": col,
  },
};
</script>

<style lang="scss" scoped>
#gridApp {
  margin: 20px;
  .demoRow {
    margin-top: 10px;
  }
  .demoCol {
    background-color: #dff9fb;
    border: 1px solid #ddd;
  }
}
</style>
