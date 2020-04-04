/* eslint-disable */
import Vue from "vue";
import App from "./App";
import VueSocketIO from "vue-socket.io";
import SocketIO from "socket.io-client";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.config.silent = true;

Vue.use(
  new VueSocketIO({
    debug: false,
    connection: SocketIO("http://localhost:3000"),
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_",
    },
  })
);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>",
});
