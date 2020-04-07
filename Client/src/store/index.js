/* eslint-disable */
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: ""
  },
  mutations: {
    test(state, payload){
      console.log(payload)
    }
  },
  actions: {}
});

export default store;
