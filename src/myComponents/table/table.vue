<template>
  <div class="wheel-table-wrapper">
    <table class="wheel-table" :class="{ border, compact, striped }">
      <thead>
        <tr>
          <th>
            <input type="checkbox" @click="onChangeAllItems" ref="allChecked" />
          </th>
          <th v-if="numberVisible">#</th>
          <th v-for="column in columns" :key="column.field">
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataSource" :key="item.id">
          <td>
            <input
              type="checkbox"
              @change="onChangeItem(item, index, $event)"
              :checked="inSelectedItems(item)"
            />
          </td>
          <td v-if="numberVisible">{{ index + 1 }}</td>
          <template v-for="column in columns">
            <td :key="column.field">{{ item[column.field] }}</td>
          </template>
        </tr>
      </tbody>
    </table>
    <div v-if="loading" class="table-loading">
      <icon name="loading" />
    </div>
  </div>
</template>

<script>
export default {
  name: "my-table",
  props: {
    orderBy: {
      type: Object,
      default: () => ({}),
    },
    loading: {
      type: Boolean,
      default: false,
    },
    selectedItems: {
      type: Array,
      default: () => [],
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

  watch: {
    selectedItems() {
      if (this.selectedItems.length === this.dataSource.length) {
        this.$refs.allChecked.checked = true;
        this.$refs.allChecked.indeterminate = false;
      } else if (this.selectedItems.length > 0) {
        this.$refs.allChecked.checked = false;
        this.$refs.allChecked.indeterminate = true;
      } else {
        this.$refs.allChecked.checked = false;
        this.$refs.allChecked.indeterminate = false;
      }
    },
  },

  methods: {
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

    inSelectedItems(item) {
      return this.selectedItems.find((i) => i.id === item.id);
    },

    onChangeItem(item, index, ev) {
      let selected = ev.target.checked;
      let copy = JSON.parse(JSON.stringify(this.selectedItems));
      if (selected) {
        copy.push(item);
      } else {
        copy = copy.filter((i) => i.id !== item.id);
      }
      this.$emit("update:selectedItems", copy);
    },

    onChangeAllItems(ev) {
      let selected = ev.target.checked;
      if (selected) {
        this.$emit("update:selectedItems", this.dataSource);
      } else {
        this.$emit("update:selectedItems", []);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$border-bottom-color: #95a5a6;
.wheel-table-wrapper {
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
      padding: 8px;
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
}
</style>
