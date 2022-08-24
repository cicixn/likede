const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://likede2-admin.itheima.net/likede/",
        changeOrigin: true,
      },
    },
  },
});
