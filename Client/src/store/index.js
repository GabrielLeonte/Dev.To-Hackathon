/* eslint-disable */
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: "",
  },
  mutations: {},
  actions: {
    SOCKET_test(state, payload) {
      console.log(payload);
    },
  },
});

export default store;
