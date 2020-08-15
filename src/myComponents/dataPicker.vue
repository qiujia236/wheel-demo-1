<template>
  <div v-click-outside class="wrapper">
    <input type="text" :value="formtDate" />
    <div v-if="isVisible" class="panel">
      <div class="pannel-nav">
        <span>&lt;</span>
        <span @click="prevMonth">&lt;&lt;</span>
        <span>{{time.year}}年</span>
        <span>{{time.month+1}}月</span>
        <span @click="nextMonth">&gt;&gt;</span>
        <span>&gt;</span>
      </div>
      <div class="pannel-content">
        <div class="days">
          <span v-for="j in 7" :key="`j`+j" class="cell">{{weekDays[j-1]}}</span>
          <div v-for="i in 6" :key="i">
            <span
              class="cell cell-days"
              @click="chooseDate(visibleDays[(i - 1) * 7 + (j - 1)])"
              :class="[{ notCurrentMonth:  !isCurrentMonth(visibleDays[(i - 1) * 7 + (j - 1)] )},
              {today:isToday(visibleDays[(i - 1) * 7 + (j - 1)])},{select:isSelect(visibleDays[(i - 1) * 7 + (j - 1)])}]"
              v-for="j in 7"
              :key="j"
            >{{ visibleDays[(i - 1) * 7 + (j - 1)].getDate() }}</span>
          </div>
        </div>
      </div>
      <div class="pannel-footer">今天</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-dataPicker",
  directives: {
    clickOutside: {
      bind(el, bingdings, vnode) {
        //把事件绑定在document上，看一下点击的是否是当前这个元素内部
        let handler = (e) => {
          if (el.contains(e.target)) {
            // 判断当前面板是否已经显示出来了
            if (!vnode.context.isVisible) {
              vnode.context.focus();
            }
          } else {
            if (vnode.context.isVisible) {
              vnode.context.blur();
            }
          }
        };

        el.handler = handler;
        document.addEventListener("click", handler);
      },
      unbind(el) {
        document.removeEventListener("click", el.handler);
      },
    },
  },

  props: {
    value: {
      type: Date,
      required: true,
      // 如果是对象，返回的默认值必须是一个函数。
      default: () => new Date(),
    },
  },
  data() {
    let { year, month } = this.getFormtDate(this.value);
    return {
      weekDays: ["日", "一", "二", "三", "四", "五", "六"],
      time: { year, month },
      isVisible: false, //控制面板是否可见
    };
  },

  mounted() {},

  computed: {
    visibleDays() {
      // 先获取当前是周几
      let { year, month, day } = this.getFormtDate(
        this.getDate(this.time.year, this.time.month, 1)
      );
      let currentFirstDay = this.getDate(year, month, 1);
      let week = currentFirstDay.getDay();

      // 当前开始的天数;
      let startDay = currentFirstDay - (week - 1) * 60 * 60 * 1000 * 24;

      let arr = [];
      for (let i = 0; i < 42; i++) {
        arr.push(new Date(startDay + i * 60 * 60 * 1000 * 24));
      }
      return arr;
    },

    formtDate() {
      let { year, month, day } = this.getFormtDate(this.value);
      return `${year}-${month + 1}-${day}`;
    },
  },

  methods: {
    getFormtDate(data) {
      let year = data.getFullYear();
      let month = data.getMonth();
      let day = data.getDate();
      return {
        year,
        month,
        day,
      };
    },

    getDate(year, month, day) {
      return new Date(year, month, day);
    },

    isCurrentMonth(date) {
      let { year, month } = this.getFormtDate(
        this.getDate(this.time.year, this.time.month, 1)
      );
      let { year: y, month: m } = this.getFormtDate(date);
      return year === y && month === m;
    },

    isToday(date) {
      let { year, month, day } = this.getFormtDate(new Date());
      let { year: y, month: m, day: d } = this.getFormtDate(date);
      return year === y && month === m && day === d;
    },

    isSelect(date) {
      let { year, month, day } = this.getFormtDate(this.value);
      let { year: y, month: m, day: d } = this.getFormtDate(date);
      return year === y && month === m && day === d;
    },

    chooseDate(date) {
      this.time = this.getFormtDate(date);
      this.$emit("input", date);
      this.blur();
    },

    prevMonth() {
      let d = this.getDate(this.time.year, this.time.month, 1);
      d.setMonth(d.getMonth() - 1);
      this.time = this.getFormtDate(d);
    },

    nextMonth() {
      let d = this.getDate(this.time.year, this.time.month, 1);
      d.setMonth(d.getMonth() + 1);
      this.time = this.getFormtDate(d);
    },

    focus() {
      this.isVisible = true;
    },

    blur() {
      this.isVisible = false;
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  position: relative;
}
.panel {
  width: 32 * 7px;
  position: absolute;
  background-color: #fff;
  box-shadow: 2px 2px 2px pink, -2px -2px 2px pink;

  .pannel-nav {
    height: 30px;
    background-color: rgb(185, 183, 183);
    display: flex;
    justify-content: space-around;
    span {
      cursor: pointer;
      user-select: none;
      line-height: 30px;
    }
  }
  .pannel-content {
    background-color: #ddd;
    .cell {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      font-weight: bold;
    }
    .cell-days:hover,
    .select {
      background-color: royalblue;
    }

    .notCurrentMonth {
      color: gray;
    }

    .today {
      background-color: red;
      color: #fff;
      border-radius: 4px;
    }
  }
  .pannel-footer {
    background-color: rgb(153, 152, 152);
    height: 30px;
  }
}
</style>
