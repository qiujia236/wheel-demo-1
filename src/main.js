import Vue from "vue";

import App from "./App.vue";
import buttonApp from "./myApp/buttonApp.vue";
import inputApp from "./myApp/inputApp.vue";
import gridApp from "./myApp/gridApp.vue";
import layoutApp from "./myApp/layoutApp.vue";
import toastApp from "./myApp/toastApp.vue";
import tapApp from "./myApp/tabApp.vue";
import popoverApp from "./myApp/popoverApp.vue";
import collapseApp from "./myApp/collapseApp.vue";
import calendarApp from "./myApp/calendarApp.vue";
import swiperApp from "./myApp/swiperApp.vue";
import treeApp from "./myApp/treeApp.vue";
import virtualApp from "./myApp/virtualApp.vue";
import cascaderApp from "./myApp/cascaderApp";
import menuApp from "./myApp/menuApp.vue";
import selectorApp from "./myApp/selectorApp.vue";
import tableAndPagerApp from "./myApp/tableAndPagerApp.vue";
import pagerApp from "./myApp/pagerApp.vue";
import stickyApp from "./myApp/stickyApp.vue";
import dialogApp from "./myApp/dialogApp.vue";
import messageApp from "./myApp/messageApp.vue";
import switchApp from "./myApp/switchApp.vue";
import radioApp from "./myApp/radioApp.vue";
import checkboxApp from "./myApp/checkboxApp.vue";
import formApp from "./myApp/formApp.vue";
import uploaderApp from "./myApp/uploaderApp.vue";

import myUI from "./myComponents/index.js";

import './assets/css/reset.css'

Vue.config.productionTip = false;

Vue.use(myUI);

new Vue({
  render: (h) => h(virtualApp),
}).$mount("#app");