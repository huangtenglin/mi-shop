import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./module/home";

Vue.use(VueRouter);

const routes = [...Home];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
