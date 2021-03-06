/* eslint-disable */
import Vuex from "vuex";
import Vue from "vue";
import router from "../router";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: "" || localStorage.getItem("token"),
    cases: [],
    mycases: [],
    historyCases: [],
    user: {}
  },
  mutations: {
    token(state, payload) {
      state.token = payload;
      localStorage.setItem("token", payload);
      router.push("/");
    },
    user_data(state, data) {
      state.user = data;
    },
    logout(state) {
      state.token = "";
      localStorage.removeItem("token");
      router.push("/login");
    },
    cases(state, data) {
      state.cases = data.filter(value => value.Status === "Waiting");
    },
    mycases(state, data) {
      state.mycases = data.filter(value => value.Status === "Taken");
      state.historyCases = data.filter(value => value.Status === "Solved");
    },
    newOpenCase(state, data) {
      state.cases.push(data);
    },
    removeOpenCase(state, data) {
      state.cases = state.cases.filter(value => value.CallSid !== data.CallSid);
    }
  },
  actions: {}
});

export default store;
