<template>
  <div class="upload">
    <div class="handle">
      <input
        type="file"
        class="upload-original"
        ref="uploadOriginal"
        @change="changFile"
        :disabled="flag"
      />
      <div class="el-upload_text" @click="clickUpload">点击上传</div>
    </div>

    <!-- 正在上传 -->
    <div class="progress" v-show="smallFile">
      <span>{{ filename }}正在上传</span>
    </div>
    <!-- PROGRESS -->
    <div class="progress" v-show="bigFile">
      <span>上传进度：{{ total | totalText }}%</span>
      <el-link type="primary" v-if="total > 0 && total < 100" @click="handleBtn"
        >{{ btn | btnText }}
      </el-link>
    </div>

    <!-- IMG -->
    <div class="uploadImg" v-if="img.length > 0">
      <div v-for="item in img" :key="item.id" class="img">
        <img :src="item.path" @error="error" />
        <span v-text="item.filename" class="text" />
      </div>
    </div>
    <!-- VIDEO -->
    <div class="uploadImg" v-show="video.length > 0">
      <div v-for="item in video" :key="item.id" class="img">
        <video :src="item.path" controls />
        <span v-text="item.filename" class="text" />
      </div>
    </div>
    <!-- other -->
    <div class="uploadImg" v-show="otherFile.length > 0">
      <span
        class="text"
        v-for="item in otherFile"
        :key="item.id"
        v-text="item.filename"
        :path="item.path"
      />
    </div>
  </div>
</template>

<script>
import { fileParse } from "./utils";
import axios from "axios";
import SparkMD5 from "spark-md5";
import qs from "qs";

export default {
  name: "my-uploader",
  props: {
    size: {
      type: Number,
      default: 4 * 1024 * 1024,
    },
    bufferCount: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      total: 0,
      btn: false,
      smallFile: false,
      bigFile: false,
      video: [],
      img: [],
      otherFile: [],
      filename: "",
      flag: false,
    };
  },

  filters: {
    btnText(btn) {
      return btn ? "继续" : "暂停";
    },

    totalText(total) {
      return total > 100 ? 100 : total;
    },
  },

  methods: {
    error(e) {
      e.target.style.display = "none";
    },
    clickUpload(e) {
      if (this.flag === true) {
        alert("正在上传文件，请稍后尝试");
        return;
      }
      e.preventDefault();
      const uploadOriginal = this.$refs.uploadOriginal;
      uploadOriginal.click();
    },

    async changFile() {
      const uploadOriginal = this.$refs.uploadOriginal;
      const file = uploadOriginal.files[0];
      const { name, size } = file;

      if (size < this.size) {
        this.smallFile = true;
        this.filename = name;
        this.flag = true;
        await this.changeFileAsBase64(file);
        return false;
      } else {
        this.bigFile = true;
        this.filename = name;
        this.flag = true;
        await this.changeFileAsBuffer(file);
        return false;
      }
    },

    async changeFileAsBase64(file) {
      if (!file) return;
      // 继续做格式校验
      /*
       * 把上传的文件先进行解析（FileReader）
       * 把其转换base64编码格式
       * 自己基于axios把信息传递给服务器
       * ...
       */
      let result = await fileParse(file, "base64");
      result = await axios.post(
        "https://express-vue-components.herokuapp.com/single2",
        qs.stringify({
          chunk: encodeURIComponent(result),
          filename: file.name,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      result = result.data;
      if (result.code == 0) {
        let suffix = /\.([0-9a-zA-Z]+)$/.exec(result.path)[1];
        if (/(png|gif|jpeg|jpg)/i.test(suffix)) {
          this.img.push({
            id: Math.random(10),
            filename: this.filename + "上传成功",
            path: result.path,
          });
        } else if (/(mp4|avi)/i.test(suffix)) {
          this.video.push({
            id: Math.random(10),
            filename: this.filename + "上传成功",
            path: result.path,
          });
        } else {
          this.otherFile.push({
            id: Math.random(10),
            filename: this.filename + "上传成功",
            path: result.path,
          });
        }
        this.flag = false;
        this.smallFile = false;
        return false;
      }
    },

    async changeFileAsBuffer(file) {
      if (!file) return;

      // 解析为BUFFER数据
      // 我们会把文件切片处理：把一个文件分割成为好几个部分（固定数量/固定大小）
      // 每一个切片有自己的部分数据和自己的名字
      // HASH_1.mp4
      // HASH_2.mp4
      // ...
      let buffer = await fileParse(file, "buffer");
      let spark = new SparkMD5.ArrayBuffer();
      let hash = null;
      let suffix = null;

      spark.append(buffer);
      hash = spark.end();
      suffix = /\.([0-9a-zA-Z]+)$/i.exec(file.name)[1];

      // 创建100个切片
      const partList = [];
      let partsize = file.size / 100;
      let cur = 0;

      for (let i = 0; i < 100; i++) {
        let item = {
          chunk: file.slice(cur, cur + partsize),
          filename: `${hash}_${i}.${suffix}`,
        };
        cur += partsize;
        partList.push(item);
      }

      this.partList = partList;
      this.hash = hash;
      this.sendRequest();
    },

    async sendRequest() {
      // 根据100个切片创造100个请求（集合）
      const requestList = [];
      this.partList.forEach((item, index) => {
        // 每一个函数都是发送一个切片的请求
        let fn = () => {
          const formData = new FormData();
          formData.append("chunk", item.chunk);
          formData.append("filename", item.filename);
          return axios
            .post(
              "https://express-vue-components.herokuapp.com/single3",
              formData,
              {
                headers: { "Content-Type": "multipart/form-data" },
              }
            )
            .then((result) => {
              result = result.data;
              if (result.code == 0) {
                this.total += 1;
                // 传完的切片我们把它移除掉
                this.partList.splice(index, 1);
              }
            });
        };
        requestList.push(fn);
      });

      // 传递：并行(ajax.abort())/串行(基于标志控制不发送)
      let i = 0;
      let complete = async () => {
        let result = await axios.get(
          "https://express-vue-components.herokuapp.com/merge",
          {
            params: { hash: this.hash },
          }
        );

        result = result.data;
        if (result.code == 0) {
          let suffix = /\.([0-9a-zA-Z]+)$/.exec(result.path)[1];
          if (/(png|gif|jpeg|jpg)/i.test(suffix)) {
            this.img.push({ id: Math.random(10), path: result.path });
          } else if (/(mp4|avi)/i.test(suffix)) {
            this.video.push({ id: Math.random(10), path: result.path });
          } else {
            this.otherFile.push({
              id: Math.random(10),
              filename: this.filename + "上传成功",
              path: result.path,
            });
          }
          this.flag = false;
          this.bigFile = false;
          return false;
        }
      };

      let send = async () => {
        // 已经中断则不再上传
        if (this.abort) return;
        if (i >= requestList.length) {
          // 都传完了
          complete();
          return;
        }
        await requestList[i]();
        i++;
        send();
      };
      send();
    },

    handleBtn() {
      if (this.btn) {
        //断点续传
        this.abort = false;
        this.btn = false;
        this.sendRequest();
        return;
      }

      //暂停上传
      this.btn = true;
      this.abort = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.upload {
  .handle {
    position: relative;
    width: 420px;
    .upload-original {
      position: absolute;
      left: 0;
      margin: 0;
      width: 0;
      height: 0;
      opacity: 0;
      outline: none;
      z-index: -1;
    }
    .el-upload_text {
      background: #efeeee;
      color: #333;
      border: 0;
      width: 120px;
      text-align: center;
      padding: 10px;
      border-radius: 5px;
      font-size: 16px;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.12);
    }
  }
  .progress {
    display: inline;
    margin-top: 5px;
    padding: 0 10px 0 5px;
    background-color: #3498db;
    border-radius: 4px;
  }

  .uploadImg {
    margin-top: 5px;
    margin-bottom: 5px;
    width: 420px;

    .img {
      display: inline-block;
      margin: 2px;
      border-radius: 4px;
      width: 200px;

      .text {
        padding: 2px;
        width: 100%;
        height: 26px;
        line-height: 18px;
        font-size: 16px;
        border: 2px dashed #efeeee;
      }
    }

    .text {
      display: inline-block;
      width: 200px;
      height: 26px;
      line-height: 18px;
      font-size: 16px;
      padding: 2px;
      margin: 2px;
      border: 2px dashed #efeeee;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>