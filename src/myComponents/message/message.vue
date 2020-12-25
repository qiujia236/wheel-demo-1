<template>
  <transition name="slide-message">
    <div
      class="x-message"
      :class="{ [`${options.type}`]: true }"
      v-show="visible"
    >
      <icon :name="options.type" class="x-icon"></icon>
      {{ options.message }}
      <icon
        name="error"
        class="x-icon close"
        v-if="options.showClose"
        @click="closeMessage"
        style="width: 14px; height: 14px"
      ></icon>
    </div>
  </transition>
</template>

<script>
import icon from "../icon/icon.vue";
import { Message } from "./index.js";

const message = {
  name: "my-message",
  components: { icon },
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          type: "success",
          message: "",
          duration: 2000,
          showClose: false,
        };
      },
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return { timer: null };
  },

  methods: {
    closeMessage() {
      this.close();
    },

    autoClose() {
      this.timer = setTimeout(() => {
        this.close();
      }, this.options.duration);
    },

    close() {
      this.visible = false;
      this.$el.addEventListener("transitionend", this.destroyEle);
    },

    destroyEle() {
      this.$destroy();
    },
  },

  mounted() {
    console.log(this.options.type);
    !this.options.showClose && this.autoClose();
  },

  beforeDestroy() {
    this.timer ? clearTimeout(this.timer) : "";
    this.$el.remove();
  },
};
message.success = Message.success;
message.info = Message.info;
message.warning = Message.warning;
message.error = Message.error;
message.confirm = Message.confirm;

export default message;
</script>

<style scoped lang="scss">
$link: #1890ff;
$success: #52c41a;
$warning: #faad14;
$error: #f5222d;
$title: rgba(0, 0, 0, 0.85);

.x-message {
  position: fixed;
  z-index: 100;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  background: #fff;
  padding: 0.5em 1.2em;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  > .x-icon {
    margin-right: 0.4em;
    fill: #0097e6;

    &.close {
      margin-left: 3em;
      margin-right: -0.8em;
      fill: rgba(0, 0, 0, 0.45);
      cursor: pointer;

      &:hover {
        fill: #0097e6;
      }
    }
  }

  &.success {
    color: $success;
  }
  &.error {
    color: $error;
  }
  &.info {
    color: $link;
  }
  &.warning {
    color: $warning;
  }
}

@keyframes slide-down {
  from {
    transform: translateY(-100%) translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(0) translateX(-50%);
    opacity: 1;
  }
}

.slide-message-enter-active,
.slide-message-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.slide-message-enter-to,
.slide-message-leave {
  transform: translateY(0) translateX(-50%);
  opacity: 1;
}
.slide-message-enter,
.slide-message-leave-to {
  transform: translateY(-100%) translateX(-50%);
  opacity: 0;
}
</style>