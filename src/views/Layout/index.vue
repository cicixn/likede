<template>
  <div class="layout-container">
    <div class="navbar-container">
      <Navbar></Navbar>
    </div>
    <div class="content-container">
      <div class="sidebar-container">
        <Sidebar></Sidebar>
      </div>
      <div class="router-view-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
export default {
  name: "Layout",
  components: { Sidebar, Navbar },
};
</script>

<style scoped lang="less">
.likede-icon {
  margin-right: 16px;
  font-size: 18px;
  vertical-align: middle;
  color: #000;
}
.layout-container {
  width: 100%;
  height: 100%;
  .navbar-container {
    width: 100%;
    height: 60px;
  }
  .content-container {
    height: calc(100% - 60px);
    width: 100%;
    display: flex;
    .sidebar-container {
      position: fixed;
      top: 60px;
      width: 167px;
      height: 100%;
      z-index: 199;
      background-color: #fff;
      overflow: auto;
    }
    .router-view-container {
      background-color: #f8fafd;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      margin-left: 167px;
      padding: 20px;
      box-sizing: border-box;
      min-width: 1420px;
    }
  }
}
</style>
