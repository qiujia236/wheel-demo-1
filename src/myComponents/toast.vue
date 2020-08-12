<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" @click="onClickClose">{{closeButton.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-toast",
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoDelay: {
      type: Number,
      default: 5,
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: () => {},
        };
      },
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0;
      },
    },
  },
  methods: {
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    onClickClose() {
      this.close();
      let callbaclk = this.closeButton.callback;
      typeof callbaclk === "function" ? callbaclk() : null;
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(this.close, this.autoDelay * 1000);
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`;
      });
    },
  },
  computed: {
    toastClasses() {
      return { [`position-${this.position}`]: true };
    },
  },
  mounted() {
    this.updateStyles();
    this.execAutoClose();
  },
};
</script>

<style lang="less" scoped>
@font-size: 14px;
@toast-min-height: 40px;
@animation-duration: 1s;
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  &.position-top {
    top: 0;
    .toast {
      animation: slide-down @animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      animation: slide-up @animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .toast {
      animation: fade-in @animation-duration;
    }
  }
}
.toast {
  font-size: @font-size;
  line-height: 1.8;
  min-height: @toast-min-height;
  align-items: center;

  background-color: #999;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  display: flex;

  .message {
    padding: 8px 0;
  }
  .close {
    margin-left: 16px;
    flex-shrink: 0;
  }
  .line {
    margin-left: 6px;
    border-left: 1px solid #666;
  }
}
</style>