<template>
  <div class="pagination-container">
    <div class="myPagination">
      <div class="total">
        共{{ pageData.totalCount }}条记录 &nbsp;&nbsp; 第{{
          pageData.pageIndex
        }}/{{ pageData.totalPage }}页
      </div>
      <div>
        <button :disabled="pageData.pageIndex == 1" @click="changePage(-1)">
          上一页
        </button>
        <button
          :disabled="pageData.pageIndex == pageData.totalPage"
          @click="changePage(1)"
        >
          下一页
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyPagination",
  props: {
    pageData: {
      type: Object,
      default: () => ({
        totalCount: 10,
        pageIndex: 1,
        pageSize: 10,
        totalPage: 1,
      }),
    },
  },
  methods: {
    changePage(val) {
      this.$emit("changePage", this.pageData.pageIndex + val);
    },
  },
  // computed: {
  //   totalPage() {
  //     return Math.ceil(this.pageData.totalCount / this.pageData.pageSize);
  //   },
  // },
};
</script>

<style lang="scss">
.pagination-container {
  background: #fff;
  padding: 32px 16px;
  .myPagination {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    padding: 0;
    button {
      width: 70px;
      margin: 0 16px;
      border-radius: 2px;
      background-color: #d5ddf8;
      outline: none;
      border: none;
      color: #606266;
      height: 32px;
      line-height: 32px;
    }
    button:disabled {
      background: #edf0f9;
      color: #d8dde3;
      cursor: no-drop;
    }
    .total {
      margin-right: 10px;
      font-weight: 400;
      color: #dbdfe5;
      height: 32px;
      line-height: 32px;
    }
  }
}
</style>
