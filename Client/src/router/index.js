import Vue from "vue";
import Router from "vue-router";
import LoginPage from "../pages/login";
import HelloWorld from "@/components/HelloWorld";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
  ],
});
