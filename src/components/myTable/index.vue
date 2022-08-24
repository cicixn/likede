<template>
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
      style="width: 100%"
      :row-class-name="rowClassName"
      v-loading="loading"
    >
      <el-table-column label="序号" width="50">
        <template slot-scope="scope">
          {{ scope.$index + 1 + (pageData.pageIndex - 1) * pageData.pageSize }}
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
          <el-button
            size="mini"
            @click="handleEdit(scope.row, scope.column, scope.$index)"
            >查看详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
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
  },
  methods: {
    handleEdit(row, column, $index) {
      console.log(row, "row");
      console.log(column, "column");
      console.log($index, "$index");
    },
  },
};
</script>

<style lang="less">
.my_table {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  :deep(.el-table) {
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
  .secondBtn {
    background-color: #fbf4f0;
    color: #333;
    border: none;
    &:hover {
      background-color: #f3e7e1;
    }
  }
}
</style>
