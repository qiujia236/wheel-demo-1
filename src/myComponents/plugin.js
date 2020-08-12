import Toast from "./toast.vue";

let currentToast;
export default {
  install(Vue, options) {
    if (!Vue.prototype.$toast) {
      Vue.prototype.$toast = function(message, toastOptions) {
        if (currentToast) {
          currentToast.close();
        }
        let onClose = () => {
          currentToast = null;
        };
        currentToast = createToast(Vue, message, toastOptions, onClose);
      };
    }
  },
};

function createToast(Vue, message, toastOptions, onClose) {
  let Constructor = Vue.extend(Toast);
  let closeButton = {
    text: toastOptions.text,
    callback: toastOptions.callback,
  };

  let toast = new Constructor({
    propsData: {
      position: toastOptions.position,
      autoClose: toastOptions.autoClose,
      closeButton: closeButton,
      enableHtml: toastOptions.enableHtml,
    },
  });
  toast.$slots.default = [message];
  toast.$mount();
  toast.$on("close", onClose);
  document.body.appendChild(toast.$el);
  return toast;
}
