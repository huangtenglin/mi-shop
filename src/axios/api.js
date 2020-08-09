import axios from "axios";
const baseUrl = "/api";
const api = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" }
});
// 添加请求拦截器
api.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 接口错误拦截
api.interceptors.response.use(
  function(response) {
    let res = response.data;
    if (res.status == 0) {
      return res.data;
    } else if (res.status == 10) {
      window.location.href = "/#/login";
      return Promise.reject(res);
    } else {
      this.Message.warning(res.msg);
      return Promise.reject(res);
    }
  },
  error => {
    let res = error.response;
    this.Message.error(res.data.message);
    return Promise.reject(error);
  }
);
export default api;
