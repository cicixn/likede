<template>
  <div class="navbar">
    <img class="navbar-logo-img" src="@/assets/images/logo.navbar.png" alt="" />
    <div class="userInfo">
      <el-avatar
        :src="`https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png`"
        v-imgerror="
          `https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png`
        "
      ></el-avatar>
      <span class="welcome">欢迎您，{{ userName }}</span>
      <!-- <div class="logout">退出<i class="el-icon-caret-bottom"></i></div> -->
      <el-tooltip
        class="item"
        effect="dark"
        content="退出登录"
        placement="bottom"
      >
        <el-button @click="logout"
          >退出<i class="el-icon-caret-bottom"></i
        ></el-button>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userName", "userImage"]),
  },
  methods: {
    logout() {
      this.$confirm("确认退出登录？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        await this.$store.dispatch("user/logout");
        this.$message.success("已退出");
        this.$router.push(`/login`);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(@/assets/images/navbarBg.png);
  background-size: cover;
  background-repeat: no-repeat;
  .navbar-logo-img {
    width: 88px;
    height: 36px;
    margin-left: 15px;
  }
  .userInfo {
    display: flex;
    align-items: center;
    margin-right: 24px;
    color: #fff;
    .welcome {
      font-size: 16px;
      color: #fff;
      margin-left: 15px;
      margin-right: 20px;
    }
    .el-button {
      background: none;
      border: none;
      padding: 0;
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>
