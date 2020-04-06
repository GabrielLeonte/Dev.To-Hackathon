import Vue from "vue";
import Router from "vue-router";
import LoginPage from "../pages/login";
import HomePage from "../pages/home";
import store from "../store";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
      beforeEnter: (to, from, next) => {
        if (!store.state.token) next("/login");
        else next();
      },
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
  ],
});
