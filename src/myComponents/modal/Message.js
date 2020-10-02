import Vue from "vue";
import MessageComponents from "./message.vue";

let getInstance = () => {
  let vm = new Vue({
    render: (h) => h(MessageComponents),
  });

  vm.$mount(); //挂载在内存中
  document.body.appendChild(vm.$el);
  let component = vm.$children[0];

  return {
    add: (options) => {
      component.add(options); //add方法又给封装了一层
    },
  };
};

let instance;
let getIns = () => {
  instance = instance || getInstance();
  return instance;
};

export const Message = {
  info: (options) => {
    getIns().add(options);
  },

  success() {},
};
