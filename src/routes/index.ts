import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "@/pages/Home.vue";
import LoginPage from "@/pages/Login.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: HomeView },
    { path: "/login", component: LoginPage },
  ],
});

export default router;
