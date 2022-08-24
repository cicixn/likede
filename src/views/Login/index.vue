<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="loginForm"
      label-position="left"
      :model="loginForm"
      :rules="rules"
    >
      <img class="login-logo" src="@/assets/images/logo.595745bd.png" alt="" />
      <el-form-item prop="loginName">
        <i class="el-icon el-icon-mobile-phone"></i>
        <el-input
          type="text"
          placeholder="请输入账户名"
          v-model="loginForm.loginName"
        />
      </el-form-item>
      <el-form-item prop="password">
        <i class="el-icon el-icon-lock"></i>
        <el-input
          :type="pwdType"
          placeholder="请输入密码"
          v-model="loginForm.password"
          ref="pwdInput"
        />
        <i
          class="likede-icon"
          :class="`${
            pwdType === 'password' ? 'icon-yanjing_bi' : 'icon-yanjing'
          }`"
          @click="changePwdType"
        ></i>
      </el-form-item>
      <el-form-item prop="code">
        <i class="likede-icon icon-yanzhengma"></i>
        <el-input
          type="text"
          placeholder="请输入验证码"
          v-model="loginForm.code"
          @keydown.native.enter="login"
        />
        <img class="code-image" :src="codeSrc" alt="" @click="getCode" />
      </el-form-item>
      <el-button
        class="login-btn"
        type="primary"
        @click="login"
        :loading="loading"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
import { getCodeApi } from "@/api/common";
export default {
  data() {
    return {
      codeSrc: null,
      pwdType: "password",
      loginForm: {
        loginName: "admin",
        password: "admin",
        code: null,
        clientToken: null,
      },
      loading: false,
      rules: {
        loginName: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  methods: {
    async getCode() {
      this.loginForm.clientToken = Math.random() * 10;
      const res = await getCodeApi(this.loginForm.clientToken);
      this.codeSrc = window.URL.createObjectURL(res.data);
    },
    changePwdType() {
      this.pwdType === "password"
        ? (this.pwdType = "")
        : (this.pwdType = "password");
      this.$nextTick(() => {
        this.$refs.pwdInput.focus();
      });
    },
    async login() {
      try {
        await this.$refs.loginForm.validate();
        this.loading = true;
        const res = await this.$store.dispatch("user/login", {
          ...this.loginForm,
          loginType: 0,
        });
        if (res.success) {
          this.$router.push("/home");
        } else {
          this.$message.error(res.msg);
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.getCode();
  },
};
</script>

<style lang="less">
.login-container {
  .likede-icon,
  .el-icon {
    width: 30px;
    box-sizing: border-box;
    padding: 6px 5px 6px 15px;
    color: #889aa4;
    vertical-align: middle;
    display: inline-block;
    font-size: 18px;
  }
}
</style>

<style lang="less" scoped>
.login-container {
  position: relative;
  min-width: 100vh;
  min-height: 100vh;
  overflow: hidden;
  background-image: url(@/assets/images/background.be4fae7d.png);
  background-repeat: no-repeat;
  background-size: cover;
  .login-logo {
    position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
  }
  :deep(.login-form) {
    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 76px 35px 0;
    box-sizing: border-box;
    background: #fff;
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
    .el-form-item {
      width: 100%;
      height: 52px;
      margin-bottom: 24px;
      background: #fff;
      border: 1px solid #e2e2e2;
      border-radius: 4px;
      box-sizing: border-box;
      .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;
        .el-input__inner {
          height: 47px;
          background: transparent;
          border: 0;
          border-radius: 0;
          padding: 12px 5px 12px 15px;
          color: #999;
          caret-color: #999;
          -webkit-appearance: none;
        }
      }
    }
    :nth-child(4) {
      .el-form-item__content {
        display: flex;
        justify-content: space-between;
      }
      .code-image {
        width: 130px;
        height: 50px;
        border: 1px solid #9ec097;
        // background-color: #911;
      }
    }
    .login-btn {
      width: 100%;
      height: 52px;
      background: linear-gradient(262deg, #2e50e1, #6878f0);
      opacity: 0.91;
      border-radius: 8px;
      color: #fff;
      text-shadow: 0 7px 22px #cfcfcf;
    }
  }
}
</style>
