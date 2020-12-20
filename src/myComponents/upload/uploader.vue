<template>
  <div>
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <div ref="temp" style="width: 0; height: 0; overflow: hidden"></div>
    <img :src="url" />
  </div>
</template>

<script>
export default {
  name: "my-upload",
  props: {
    name: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      default: "post",
    },
    parseResponse: { type: Function, required: true },
  },

  data() {
    return {
      url: "about_blank",
    };
  },

  methods: {
    onClickUpload() {
      let input = document.createElement("input");
      input.type = "file";
      this.$refs.temp.appendChild(input);

      input.addEventListener("change", () => {
        let file = input.files[0];
        input.remove();
        console.log(file);
        let formDate = new FormData();
        formDate.append(this.name, file);

        let xhr = new XMLHttpRequest();
        xhr.open(this.method, this.action);
        xhr.onload = () => {
          console.log(xhr.response);
          let url = this.parseResponse(xhr.response);
          this.url = url;
        };

        xhr.send(formDate);
      });

      input.click();
    },

    updataFile(input) {
      let file = input.files[0];
      input.remove();
      let formDate = new FormData();
      formDate.append(this.name, file);

      let xhr = new XMLHttpRequest();
      xhr.open(this.method, this.action);
      xhr.onload = () => {
        let url = this.parseResponse(xhr.response);
        this.url = url;
      };
      xhr.send(formDate);
      input.click();
    },

    createInput() {
      let input = document.createElement("input");
      input.type = "file";
      this.$refs.temp.appendChild(input);
      return input;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>