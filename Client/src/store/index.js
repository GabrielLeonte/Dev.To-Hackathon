/* eslint-disable */
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: ""
  },
  mutations: {
    token(state, payload) {
      state.token = payload;
      localStorage.setItem("token", payload);
    }
  },
  actions: {}
});

export default store;
