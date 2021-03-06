import Vue from "vue";
import Router from "vue-router";
import store from "../store";
import LoginPage from "../pages/login";
import HomePage from "../pages/home";
import SignupPage from "../pages/signup";
import ResetPage from "../pages/reset";
import openCasesPage from "../pages/openCases";
import historyPage from "../pages/history";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
      beforeEnter: (to, from, next) => {
        if (!store.state.token) next("/login");
        else next();
      }
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
      beforeEnter: (to, from, next) => {
        if (store.state.token) next("/");
        else next();
      }
    },
    {
      path: "/signup",
      name: "SignupPage",
      component: SignupPage,
      beforeEnter: (to, from, next) => {
        if (store.state.token) next("/");
        else next();
      }
    },
    {
      path: "/reset",
      name: "ResetPage",
      component: ResetPage,
      beforeEnter: (to, from, next) => {
        if (store.state.token) next("/");
        else next();
      }
    },
    {
      path: "/openCases",
      name: "openCasesPage",
      component: openCasesPage,
      beforeEnter: (to, from, next) => {
        if (!store.state.token) next("/login");
        else next();
      }
    },
    {
      path: "/history",
      name: "historyPage",
      component: historyPage,
      beforeEnter: (to, from, next) => {
        if (!store.state.token) next("/login");
        else next();
      }
    }
  ]
});
