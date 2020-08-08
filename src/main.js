import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MyApp from "./myComponents/App.vue";

Vue.config.productionTip = false;

// Vue.use(myUI);

let a = new Vue({
  router,
  store,
  render: (h) => h(MyApp),
}).$mount("#app");
