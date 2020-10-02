<template>
  <div class="modal">
    <div class="message">
      <div class="tip" v-for="(item,index) in messages" :key="index">{{item.message}}</div>
    </div>
    <div class="black" v-if="show"></div>
    <div class="center" v-if="show">
      <div class="content" v-text="options.message"></div>
      <button class="button" @click="toggle">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-message",
  data() {
    return {
      messages: [],
      options: {},
      id: 0,
      show: false,
    };
  },

  methods: {
    toggle() {
      this.show = !this.show;

      let id = this.id++;
      let layer = { ...this.options, id };
      this.messages.push(layer);
      layer.timer = setTimeout(() => {
        this.remove(layer);
      }, this.options.duration);
    },

    // 把用户点击时提交的数据存入message当中
    add(options) {
      this.show = !this.show;
      this.options = options;
    },

    remove(layer) {
      clearTimeout(layer.timer);
      this.messages = this.messages.filter((item) => item.id !== layer.id);
    },
  },
};
</script>

<style lang="less" scoped>
.modal {
  .message {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    .tip {
      width: 150px;
      margin: 10px;
      text-align: center;
      padding: 2px 0;
      border-radius: 6px;
      background-color: greenyellow;
      transition: all 2s ease;
    }
  }
  .black {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    left: 0;
    top: 0;
  }
  .center {
    position: absolute;
    width: 200px;
    height: 120px;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    border-radius: 6px;
    background-color: greenyellow;
    .content {
      margin: 10px;
    }

    .button {
      position: absolute;
      bottom: 10px;
      right: 10px;
      //   margin-right: -20px;
      padding: 5px 10px;
      border: none;
    }
  }
}
</style>