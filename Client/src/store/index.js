/* eslint-disable */
import Vuex from "vuex";
import Vue from "vue";
import router from "../router";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: "",
    user: {}
  },
  mutations: {
    token(state, payload) {
      state.token = payload;
      localStorage.setItem("token", payload);
      router.push("/");
    },
    user_data(state, payload) {
      state.user = payload.user_data;
    },
    logout(state) {
      state.token = "";
      localStorage.removeItem("token");
      router.push("/login");
    }
  },
  actions: {}
});

export default store;
