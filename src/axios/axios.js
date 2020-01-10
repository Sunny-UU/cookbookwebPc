import axios from "axios";

// 全局配置:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

let config = {
  baseURL: process.env.VUE_APP_URL
  // timeout: 10000 // Timeout 超时 10秒
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // 请求前 转换为json数据
    config.data = JSON.stringify(config.data);
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default _axios;
