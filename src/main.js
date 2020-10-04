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
import modalApp from "./myApp/modalApp.vue";
import cascaderApp from "./myApp/cascaderApp.vue";
import navApp from "./myApp/navApp.vue";
import pagerApp from "./myApp/pagerApp.vue";

import router from "./router";
import store from "./store";
import myUI from "./myComponents/index.js";
import Button from "./myComponents/button.vue";

Vue.config.productionTip = false;

Vue.use(myUI);

new Vue({
  router,
  store,
  render: (h) => h(pagerApp),
}).$mount("#app");

import chai from "chai";
import spies from "chai-spies";
chai.use(spies);
const expect = chai.expect;

// 测试iconProps参数
{
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: { iconProps: "download" },
  });

  button.$mount();
  let useElement = button.$el.querySelector("use");
  let href = useElement.getAttribute("xlink:href");
  expect(href).to.equal("#download");
}

// 测试iconProps和loading参数
{
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: { iconProps: "setting", loading: true },
  });

  button.$mount();
  let useElement = button.$el.querySelector("use");
  let href = useElement.getAttribute("xlink:href");
  expect(href).to.equal("#loading");
}

// 测试icon-position参数为left
{
  const div = document.createElement("div");
  document.body.appendChild(div);

  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: { iconProps: "setting", iconPosition: "left" },
  });
  button.$mount(div);
  let svg = button.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svg);
  expect(order).to.equal("1");
  button.$el.remove();
  button.$destroy();
}
// 测试icon-position参数为right
{
  const div = document.createElement("div");
  document.body.appendChild(div);

  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: { iconProps: "setting", iconPosition: "right" },
  });
  button.$mount(div);
  let svg = button.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svg);
  expect(order).to.equal("2");
  button.$el.remove();
  button.$destroy();
}

// 测试click
{
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: { iconProps: "setting" },
  });
  button.$mount();
  let spy = chai.spy(function() {});

  button.$on("click", spy);

  let testButton = button.$el;
  testButton.click();
  expect(spy).to.have.been.called();
}
