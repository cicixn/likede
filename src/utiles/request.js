import axios from "axios";
import store from "@/store";
import { Message } from "element-ui";
import router from "@/router";

const timeout = 3600;
function isCheckout() {
  return (Date.now() - store.getters.likedeLoginTime) / 1000 > timeout;
}

const request = axios.create({
  baseURL: "/api",
  timeout: 5000, // 请求超时时间
});

request.interceptors.request.use(
  function (config) {
    // config 是本次请求的配置
    // 在发送请求之前做些什么
    const token = store.getters.token;
    if (token) {
      if (isCheckout()) {
        store.dispatch("user/logout");
        router.push("/login");
        return Promise.reject(new Error("登录超时，请重新登陆"));
      }
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    Message.error(error.message);
    return Promise.reject(new Error(error));
  }
);
export default request;
