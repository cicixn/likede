<template>
  <div class="sidebar">
    <el-menu :router="true">
      <!-- 帝可得 home  -->
      <el-menu-item index="/home">
        <i class="likede-icon icon-shouye"></i>
        <span slot="title">帝可得</span>
      </el-menu-item>

      <!-- 工单管理 -->
      <el-submenu index="/task">
        <template slot="title">
          <i class="likede-icon icon-gongdan"></i>
          <span>工单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/task/business">
            <span slot="title">运营工单</span>
          </el-menu-item>
          <el-menu-item index="/task/operation">
            <span slot="title">运维工单</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 点位管理 -->
      <el-submenu index="/node">
        <template slot="title">
          <i class="likede-icon icon-weizhi"></i>
          <span>点位管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/node/region">
            <span slot="title">区域管理</span>
          </el-menu-item>
          <el-menu-item index="/node/node">
            <span slot="title">点位管理</span>
          </el-menu-item>
          <el-menu-item index="/node/partner">
            <span slot="title">合作商管理</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 设备管理 -->
      <el-submenu index="/vm">
        <template slot="title">
          <i class="likede-icon icon-shebei"></i>
          <span>设备管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/vm/index">
            <span slot="title">设备管理</span>
          </el-menu-item>
          <el-menu-item index="/vm/status">
            <span slot="title">设备状态</span>
          </el-menu-item>
          <el-menu-item index="/vm/type">
            <span slot="title">设备类型管理</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 人员管理 -->
      <el-submenu index="/user">
        <template slot="title">
          <i class="likede-icon icon-renyuanguanli"></i>
          <span>人员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/user/index">
            <span slot="title">人员列表</span>
          </el-menu-item>
          <el-menu-item index="/user/user-task-stats">
            <span slot="title">人效统计</span>
          </el-menu-item>
          <el-menu-item index="/user/user-work">
            <span slot="title">工作量列表</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 商品管理 -->
      <el-submenu index="/sku">
        <template slot="title">
          <i class="likede-icon icon-shangpin"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/sku/sku-class">
            <span slot="title">商品类型</span>
          </el-menu-item>
          <el-menu-item index="/sku/sku">
            <span slot="title">商品管理</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 策略管理 -->
      <el-menu-item index="/policy/index">
        <i class="likede-icon icon-celue"></i>
        <span slot="title">策略管理</span>
      </el-menu-item>

      <!-- 订单管理 -->
      <el-menu-item index="/order/index">
        <i class="likede-icon icon-dingdanguanli"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.sidebar {
  .el-menu {
    border: none;
    height: 100%;
    width: 100%;
    .el-submenu .el-menu-item {
      min-width: 100%;
      color: #999;
      padding-left: 46px !important;
      &.is-active {
        width: 100%;
        color: #409eff;
      }
    }
    .el-menu-item-group__title {
      padding: 0;
    }
  }
  .likede-icon {
    margin-right: 10px;
    color: #000;
    font-size: 20px;
  }
}
</style>
