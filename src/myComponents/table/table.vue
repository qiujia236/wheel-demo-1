<template>
  <div class="wheel-table-wrapper" ref="tableWrapper">
    <div :style="{ overflow: 'auto' }" class="div-wrapper" ref="divWrapper">
      <table
        class="wheel-table"
        :class="{ border, compact, striped }"
        ref="table"
      >
        <thead>
          <tr>
            <th v-if="expendFileld" :style="{ width: '10px' }"></th>
            <th :style="{ width: '20px' }">
              <input
                type="checkbox"
                @click="onChangeAllItems"
                ref="allChecked"
              />
            </th>
            <th :style="{ width: '50px' }" v-if="numberVisible">#</th>
            <th
              :style="{ width: column.width + 'px' }"
              v-for="column in columns"
              :key="column.field"
            >
              <div class="sorter-wrapper">
                {{ column.text }}
                <div
                  v-if="column.field in orderBy"
                  class="sorter"
                  @click="changeOrderBy(column.field)"
                >
                  <icon
                    name="up"
                    :class="{ active: orderBy[column.field] === 'asc' }"
                  />
                  <icon
                    name="down"
                    :class="{ active: orderBy[column.field] === 'desc' }"
                  />
                </div>
              </div>
            </th>
            <th ref="actionsHeader" v-if="$scopedSlots.default"></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, index) in dataSource">
            <tr :key="item.id">
              <td
                v-if="expendFileld"
                class="expend-icon-wrapper"
                :style="{ width: '10px', textAlign: 'center' }"
              >
                <icon
                  name="right"
                  class="expend-icon"
                  @click="expendItem(item.id)"
                  :class="{ active: inExpendeds(item.id) }"
                />
              </td>
              <td :style="{ width: '20px' }">
                <input
                  type="checkbox"
                  @change="onChangeItem(item, $event)"
                  :checked="inSelectedItems(item)"
                />
              </td>
              <td :style="{ width: '50px' }" v-if="numberVisible">
                {{ index + 1 }}
              </td>
              <template v-for="column in columns">
                <td :style="{ width: column.width + 'px' }" :key="column.field">
                  {{ item[column.field] }}
                </td>
              </template>
              <td v-if="$scopedSlots.default">
                <div ref="actions" style="display: inline-block">
                  <slot :item="item"></slot>
                </div>
              </td>
            </tr>
            <tr v-if="inExpendeds(item.id)" :key="`${item.id}expend`">
              <td :colspan="columns.length + 2">
                {{ item[expendFileld] ? item[expendFileld] : "没有任何数据" }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div v-if="loading" class="table-loading">
      <icon name="loading" />
    </div>
  </div>
</template>

<script>
import icon from "../icon/icon.vue";

export default {
  name: "my-table",
  components: { icon },
  props: {
    expendFileld: {
      type: String,
    },
    orderBy: {
      type: Object,
      default: () => ({}),
    },
    height: { type: Number },
    loading: {
      type: Boolean,
      default: false,
    },
    columns: {
      type: Array,
      required: true,
    },
    dataSource: {
      type: Array,
      required: true,
      validator(array) {
        return !(array.filter((item) => item.id == null).length > 0);
      },
    },
    numberVisible: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      derault: false,
    },
    compact: {
      type: Boolean,
      default: false,
    },
    striped: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return { tableClone: "", selectedChecked: [], expendedIds: [] };
  },

  mounted() {
    // 必须先更改最后一列宽度再算高度
    this.updateSlotWidth();

    let tableClone = this.$refs.table.cloneNode(false);
    tableClone.classList.add("wheel-table-copy");
    this.tableClone = tableClone;
    let tHead = this.$refs.table.children[0];
    let { height } = tHead.getBoundingClientRect();

    this.$refs.table.style.marginTop = height + "px";
    this.$refs.divWrapper.style.height = this.height + "px";

    tableClone.appendChild(tHead);
    this.$refs.tableWrapper.appendChild(tableClone);
  },

  beforeDestroy() {
    this.tableClone.remove();
  },

  watch: {
    selectedChecked() {
      if (this.selectedChecked.length === this.dataSource.length) {
        this.$refs.allChecked.checked = true;
        this.$refs.allChecked.indeterminate = false;
      } else if (this.selectedChecked.length > 0) {
        this.$refs.allChecked.checked = false;
        this.$refs.allChecked.indeterminate = true;
      } else {
        this.$refs.allChecked.checked = false;
        this.$refs.allChecked.indeterminate = false;
      }
    },
  },

  methods: {
    updateSlotWidth() {
      if (this.$scopedSlots.default) {
        let div = this.$refs.actions[0];
        let { width } = div.getBoundingClientRect();
        let parent = div.parentNode;
        let styles = getComputedStyle(parent);
        let paddingLeft = styles.getPropertyValue("padding-left");
        let paddingRight = styles.getPropertyValue("padding-right");
        let borderLeft = styles.getPropertyValue("border-left-width");
        let borderRight = styles.getPropertyValue("border-right-width");

        let width2 =
          width +
          parseInt(paddingRight) +
          parseInt(paddingRight) +
          parseInt(borderLeft) +
          parseInt(borderRight) +
          "px";

        this.$refs.actionsHeader.style.width = width2;
        this.$refs.actions.map((div) => {
          div.parentNode.style.width = width2;
        });
      }
    },

    changeOrderBy(key) {
      const copy = JSON.parse(JSON.stringify(this.orderBy));
      let oldValue = copy[key];

      if (oldValue === "asc") {
        copy[key] = "desc";
      } else if (oldValue === "desc") {
        copy[key] = true;
      } else {
        copy[key] = "asc";
      }

      this.$emit("update:orderBy", copy);
    },

    inExpendeds(id) {
      return this.expendedIds.find((item) => item === id);
    },

    expendItem(id) {
      if (this.expendedIds.indexOf(id) < 0) {
        this.expendedIds.push(id);
      } else {
        let index = this.expendedIds.indexOf(id);
        console.log(index);
        this.expendedIds.splice(index, 1);
      }
    },

    inSelectedItems(item) {
      return this.selectedChecked.find((i) => i.id === item.id);
    },

    onChangeItem(item, ev) {
      let selected = ev.target.checked;

      if (selected) {
        this.selectedChecked.push(item);
      } else {
        this.selectedChecked = this.selectedChecked.filter(
          (i) => i.id !== item.id
        );
      }
    },

    onChangeAllItems(ev) {
      let selected = ev.target.checked;
      if (selected) {
        let copy = JSON.parse(JSON.stringify(this.dataSource));
        this.selectedChecked = copy;
      } else {
        this.selectedChecked.splice(0);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$border-bottom-color: #95a5a6;
.wheel-table-wrapper {
  width: 100%;
  margin: 10px;
  .wheel-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-bottom: 1px solid $border-bottom-color;

    td,
    th {
      border-bottom: 1px solid $border-bottom-color;
      text-align: left;
      padding: 8px 8px;
    }

    .sorter-wrapper {
      display: flex;
      align-items: center;
      flex-direction: row;
      .sorter {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 2px;
        svg {
          width: 0.6em;
          height: 0.5em;
          fill: #bdc3c7;

          &.active {
            fill: #000;
          }
        }
      }
    }

    tbody {
      > tr {
        background-color: transparent;
      }
    }

    &.border {
      border: 1px solid $border-bottom-color;
      td,
      th {
        border: 1px solid $border-bottom-color;
      }
    }

    &.compact {
      td,
      th {
        padding: 4px;
      }
    }

    &.striped {
      tbody {
        > tr {
          &:nth-child(odd) {
            background-color: #ecf0f1;
          }
          &:nth-child(even) {
            background-color: #bdc3c7;
          }
        }
      }
    }
    .expend-icon-wrapper {
      position: relative;
      .expend-icon {
        position: absolute;
        left: 50%;
        top: 50%;
        font-size: 0.8em;
        transform: rotate(0deg) translate(-50%, -60%);
        transform-origin: center top;
        transition: transform 0.2s linear;
        &.active {
          transform: rotate(90deg);
          transform-origin: center top;
          transition: transform 0.2s linear;
        }
      }
    }

    .slot-wrapper {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  position: relative;
  .table-loading {
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 50px;
      height: 50px;
      animation: spin 3s infinite linear;
    }
  }

  .div-wrapper::-webkit-scrollbar {
    width: 0px;
    height: 4px;
  }

  .wheel-table-copy {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
  }
}
</style>
