<template>
  <div class="business-container">
    <Search></Search>
    <TablePage
      :showAddBtn="true"
      :columnData="columnData"
      :tableData="tableData"
      :loading="loading"
      :pageData="pageData"
      @changePage="changePage"
    ></TablePage>
    <el-dialog
      title="工单详情"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
    >
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import TablePage from "@/components/Table-Page";
import Search from "@/components/Search";
import { workOrderSearchApi } from "@/api/workOrder";

export default {
  name: "Business",
  data() {
    return {
      pageData: {
        pageIndex: 1,
        pageSize: 10,
        totalPage: 1,
        totalCount: 10,
        isRepair: false,
      },
      columnData: [
        { label: "工单编号", prop: "taskCode" },
        { label: "设备编号", prop: "innerCode" },
        { label: "工单类型", prop: "taskType.typeName" },
        { label: "工单方式", prop: "createType" },
        { label: "工单状态", prop: "taskStatusTypeEntity.statusName" },
        { label: "运营人员", prop: "userName" },
        { label: "创建日期", prop: "createTime" },
      ],
      tableData: [],
      loading: false,
      dialogVisible: false,
    };
  },
  components: { TablePage, Search },
  created() {
    this.getWorkOrderSearch();
  },
  methods: {
    async getWorkOrderSearch() {
      try {
        this.loading = true;
        const { data } = await workOrderSearchApi(this.pageData);
        this.tableData = [
          ...JSON.parse(JSON.stringify(data.currentPageRecords)),
        ];
        this.tableData.forEach((ele) => {
          ele.createType = ele.createType === 0 ? "自动" : "手动";
          ele.createTime = this.dayjs(ele.createTime).format(
            "YYYY-MM-DD HH:MM:ss"
          );
        });
        this.pageData.totalCount = data.totalCount;
        this.pageData.totalPage = data.totalPage;
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    changePage(page) {
      this.pageData.pageIndex = page;
      this.getWorkOrderSearch();
    },
    handleClose() {
      this.dialogVisible = false;
    },
  },
};
</script>

<style lang="less" scope>
.business-container {
  width: 100%;
  height: 100%;

  .el-dialog__footer {
    text-align: center;
  }
}
</style>
