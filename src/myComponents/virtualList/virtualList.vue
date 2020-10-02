<template>
  <!-- 可视区域 -->
  <div class="viewport" ref="viewport" @scroll="scrollFn">
    <!-- 自己做一个滚动条 -->
    <div class="scroll-bar" ref="scrollBar"></div>
    <!-- 真实渲染的高度 -->
    <div
      class="scroll-list"
      ref="scrollList"
      :style="{ transform: `translateY(${offset}px)` }"
    >
      <div
        v-for="item in visibleData"
        :key="item.id"
        :vid="item.id"
        ref="items"
      >
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import throttle from "lodash/throttle";
export default {
  name: "my-virtualList",
  props: {
    size: Number, //当前每一项的高度
    remain: Number, // 可见多少个
    items: Array,
    preRender: Number,
    variable: Boolean,
  },
  data() {
    return { start: 0, end: this.remain, offset: 0, positions: [] };
  },

  computed: {
    prevCount() {
      // 渲染三屏幕
      return Math.min(this.start, this.preRender);
    },

    nextCount() {
      return Math.min(this.preRender, this.items.length - this.end);
    },

    // 可见的数据有哪些
    visibleData() {
      let start = this.start - this.prevCount;
      let end = this.end + this.nextCount;
      return this.items.slice(start, end);
    },
  },

  created() {
    this.scrollFn = throttle(this.handleScroll, 200, { leading: false });
  },

  mounted() {
    this.$refs.viewport.style.height = this.size * this.remain + "px";
    this.$refs.scrollBar.style.height = this.size * this.items.length + "px";
    this.cacheList();
  },

  updated() {
    // 页面渲染完成后，需要根据当前展示的页面，更新缓存区的内容
    this.$nextTick(() => {
      let nodes = this.$refs.items;
      if (!(nodes && nodes.length > 0)) {
        return;
      }

      nodes.forEach((node) => {
        let { height } = node.getBoundingClientRect(); // 真实的高度
        // 我希望更新老的高度
        let id = node.getAttribute("vid") - 0;
        let oldHeight = this.positions[id].height;
        let val = oldHeight - height; // 计算当前的高度是否和之前的高度有变化

        if (val) {
          this.positions[id].height = height;
          this.positions[id].bottom = this.positions[id].bottom - val;
          // 将后续的所有人都要向后移动
          for (let i = id + 1; i < this.positions.length; i++) {
            this.positions[i].top = this.positions[i - 1].bottom;
            this.positions[i].bottom = this.positions[i].bottom - val;
          }
        }
      });

      // 只要更新过，就会算出滚动条的最新高度
      this.$refs.scrollBar.style.height =
        this.positions[this.positions.length - 1].bottom + "px";
    });
  },

  methods: {
    handleScroll() {
      // 应该先算出来当前滚过去几个了，当前应该从第几个开始显示
      let scrollTop = this.$refs.viewport.scrollTop;

      if (this.variable) {
        this.start = this.getStartIndex(scrollTop);
        this.end = this.start + this.remain;

        this.offset = this.positions[this.start - this.prevCount]
          ? this.positions[this.start - this.prevCount].top
          : 0;
      } else {
        // 获取当前应该从第几个开始渲染
        this.start = Math.floor(scrollTop / this.size);
        // 获取当前应该从第几个停止渲染
        this.end = this.start + this.remain;
        // 定位当前的可视区域
        this.offset = this.start * this.size - this.size * this.prevCount;
      }
    },

    getStartIndex(value) {
      //查找当前滚动需要找到的值
      let start = 0;
      let end = this.positions.length - 1;
      let temp;
      while (start <= end) {
        let middleIndex = parseInt((start + end) / 2);
        let middleValue = this.positions[middleIndex].bottom;

        if (middleValue === value) {
          // 如果直接找到了，就返回当前的下一个人
          return middleIndex + 1;
        } else if (middleValue < value) {
          start = middleIndex + 1;
        } else if (middleValue > value) {
          if (temp == null || temp > middleIndex) {
            temp = middleIndex;
          }
          end = middleIndex - 1;
        }
      }

      return temp;
    },

    cacheList() {
      // 缓存当前项的高度和top值，还有bottom
      this.positions = this.items.map((item, index) => {
        return {
          height: this.size,
          top: index * this.size,
          bottom: (index + 1) * this.size,
        };
      });
    },
  },
};
</script>

<style lang="less" scoped>
.viewport {
  overflow-y: scroll;
  position: relative;
  border: 1px solid blanchedalmond;
}

.scroll-list {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
