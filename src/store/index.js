import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import getters from "./getters";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
  },
  getters,
  plugins: [
    createPersistedState({
      reducer(state) {
        return {
          user: {
            likedeLoginTime: state.user.likedeLoginTime,
            userId: state.user.userId,
          },
        };
      },
    }),
  ],
});

export default store;
