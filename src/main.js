import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import myUI from "./myComponents/index.js";
import Button from "./myComponents/button.vue";

Vue.config.productionTip = false;

Vue.use(myUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
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
