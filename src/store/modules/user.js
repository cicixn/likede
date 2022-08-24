import { loginApi, getUserInfoApi } from "@/api/common";
import { setToken, getToken, removeToken } from "@/utiles/auth";
export default {
  namespaced: true,
  state: {
    token: getToken() || "",
    userId: null,
    userInfo: {},
    likedeLoginTime: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      setToken(token);
    },
    removeToken(state) {
      state.token = null;
      removeToken();
    },
    setUserId(state, id) {
      state.userId = id;
    },
    setUserInfo(state, userInfo) {
      state.userInfo = { ...userInfo };
    },
    removeUserInfo(state) {
      state.userInfo = {};
    },
    setLikedeLoginTime(state, time) {
      state.likedeLoginTime = time;
    },
  },
  actions: {
    // 登录
    async login({ commit }, formData) {
      const { data } = await loginApi(formData);
      commit("setToken", data.token);
      commit("setUserId", data.userId);
      commit("setLikedeLoginTime", +new Date());
      return data;
    },
    // 获取用户信息
    async getUserInfo({ commit }, id) {
      const { data } = await getUserInfoApi(id);
      commit("setUserInfo", data);
      return data;
    },
    // 退出
    logout({ commit }) {
      commit("removeToken");
      commit("removeUserInfo");
    },
  },
};
