<template>
  <div class="table-page-container">
    <!-- table -->
    <div class="my_table">
      <el-button type="warning" style="margin-bottom: 20px" v-if="showAddBtn">
        <i class="el-icon-circle-plus-outline"></i>
        新建</el-button
      >
      <el-button
        type="warning"
        style="margin-bottom: 20px"
        v-if="showSecondBtn"
        class="secondBtn"
        >{{ secondBtnText }}</el-button
      >
      <el-table
        :data="tableData"
        max-height="650"
        style="width: 100%"
        v-loading="loading"
      >
        <el-table-column label="序号" width="50">
          <template slot-scope="scope">
            {{
              scope.$index + 1 + (pageData.pageIndex - 1) * pageData.pageSize
            }}
          </template>
        </el-table-column>
        <el-table-column
          v-for="(item, index) in columnData"
          :key="index"
          :prop="item.prop"
          :label="item.label"
        ></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <span
              @click="handleEdit(scope.row, scope.column, scope.$index)"
              v-if="isShowDetails"
              >查看详情</span
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- pagination -->
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
  </div>
</template>

<script>
export default {
  name: "myTable",
  props: {
    columnData: {
      type: Array,
      default: () => [],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
    showAddBtn: {
      type: Boolean,
      default: () => false,
    },
    showSecondBtn: {
      type: Boolean,
      default: () => false,
    },
    secondBtnText: {
      type: String,
      default: () => "second",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    pageData: {
      type: Object,
      default: () => ({
        totalCount: 10,
        pageIndex: 1,
        pageSize: 10,
        totalPage: 1,
      }),
    },
    isShowDetails: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleEdit(row, column, $index) {
      console.log(row, "row");
      console.log(column, "column");
      console.log($index, "$index");
      this.$parent.dialogVisible = true;
    },
    changePage(val) {
      this.$emit("changePage", this.pageData.pageIndex + val);
    },
  },
};
</script>

<style lang="less">
.table-page-container {
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: calc(100% - 104px);
  .my_table {
    .el-table {
      width: 100%;
      border: 0;
      background-color: #fff;
      th,
      tr,
      td {
        border-bottom: none;
        background-color: #fff;
      }
      &::before {
        height: 0px;
      }
      .el-table__fixed:before {
        height: 0;
      }
    }
    .el-table::before {
      height: 0;
    }
    td.el-table__cell,
    th.el-table__cell.is-leaf {
      border-bottom: none;
      line-height: 1.15;
      padding: 10px 0px 9px;
      font-weight: 500;
      text-align: left;
      color: rgb(102, 102, 102);
    }
    .has-gutter {
      tr .el-table__cell {
        background: rgb(243, 246, 251);
      }
    }
    .secondBtn {
      background-color: #fbf4f0;
      color: #333;
      border: none;
      &:hover {
        background-color: #f3e7e1;
      }
    }
  }
  .pagination-container {
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
        color: #aeb2b7;
        height: 32px;
        line-height: 32px;
      }
    }
  }
}
</style>
