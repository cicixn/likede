import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 清除默认样式
import "./assets/reset.css";
// 引入icon-font样式
import "./assets/icon-font/iconfont.css";
// 引入elementUi
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
// vuex 存数据插件
import "default-passive-events";
// 引入permission  路由拦截
import "@/permission";
// dayjs
import dayjs from "dayjs";
Vue.prototype.dayjs = dayjs;
// 引入自定义指令
import * as directives from "@/directives";
Object.keys(directives).forEach((ele) => {
  Vue.directive(ele, directives[ele]);
});

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
