<template>
  <transition name="dialog-fade">
    <div class="wb-dialog-wrapper" v-show="visible" @click.self="handleClose">
      <div class="wb-dialog" :style="{ width, marginTop }">
        <div class="wb-dialog_header">
          <slot name="title">
            <span class="wb-dialog_title">{{ title }}</span>
          </slot>
          <button class="wb-dialog-headerbtn">
            <icon name="error" @click="handleClose" class="shutdown" />
          </button>
        </div>
        <div class="wb-dialog_body">
          <slot></slot>
        </div>
        <div class="wb-dialog_footer" v-if="$slots.footer">
          <slot name="footer"> </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import icon from "../icon/icon.vue";

export default {
  name: "my-dialog",
  components: { icon },
  props: {
    title: {
      type: String,
      default: "提示",
    },
    width: {
      type: String,
      default: "50%",
    },
    marginTop: {
      type: String,
      default: "15vh",
    },
    visible: {
      type: Boolean,
      defautl: false,
    },
  },
  methods: {
    handleClose(e) {
      this.$emit("update:visible", !this.visible);
    },
  },
};
</script>

<style lang="scss" scoped>
.wb-dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.7);

  .wb-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    .wb-dialog_header {
      padding: 20px 20px 10px;
      line-height: 24px;
      font-size: 18px;
      color: #303133;
      .wb-dialog_title {
      }
      .wb-dialog-headerbtn {
        position: absolute;
        top: 25px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .shutdown {
          fill: #909399;
          width: 1.2rem;
          height: 1.2rem;
        }
      }
    }

    .wb-dialog_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }

    .wb-dialog_footer {
      padding: 10 20px 20px;
      text-align: right;
      box-sizing: border-box;
    }
  }
}

.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>