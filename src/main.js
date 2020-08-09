import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueLazyLoad from 'vue-lazyload'
// 引用公共样式
import "./scss/reset.scss";
Vue.config.productionTip = false;
// 是否使用Mock
const isMock = true;
if (isMock) {
  require("mockjs");
}
// 引用element-ui 组件库
import { Button, Select } from "element-ui";
Vue.use(Button);
Vue.use(Select);
// 使用懒加载
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
