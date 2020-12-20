<template>
  <div id="upload">
    <my-upload
      accept="image/*"
      name="file"
      method="post"
      action="https://node-server-11.herokuapp.com/upload"
      :parseResponse="parseResponse"
      :fileList.sync="fileList"
    >
      <button>上传</button>
      <template slot="tips">
        <div>只能上传300kb以内的jpg，png</div>
      </template>
    </my-upload>
  </div>
</template>

<script>
export default {
  name: "uploadApp",

  data() {
    return { fileList: "" };
  },
  methods: {
    parseResponse(response) {
      let object = JSON.parse(response);
      let url = `https://node-server-11.herokuapp.com/preview/${object.id}`;
      return url;
    },
  },
};
</script>

<style lang="scss" scoped>
#upload {
  margin: 20px;
}
</style>