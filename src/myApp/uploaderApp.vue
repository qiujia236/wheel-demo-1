<template>
  <div>
    <my-uploader :size="3 * 1024"></my-uploader>
  </div>
</template>

<script>
import uploader from "../myComponents/upload/uploader.vue";

export default {
  name: "uploaderApp",
  components: { "my-uploader": uploader },
};
</script>