import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

import axios from "axios";

// const instance = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com/todoss/1',
//   timeout: 10000,
//   headers: {}
// });

// Add a request interceptor
axios.interceptors.request.use(
  function(config) {
    console.log("%c Config in interceptors", "color: blue", config);

    const token = localStorage.getItem("token");
    config.headers["Authorization"] = token;

    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    console.error(error);

    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    console.log("%c Response in interceptors", "color: blue", response);

    // response = {
    //   data: {
    //     Data: [
    //       {
    //         id: 1,
    //         name: 'bcjohn'
    //       }
    //     ]
    //   },
    //   status: true
    // }
    // ==> response.data

    // Do something with response data
    return response;
  },
  function(error) {
    console.log(typeof error);
    for (const key in error) {
      if (error.hasOwnProperty(key)) {
        console.log(`${key}: ${error[key]}`);
      }
    }
    console.log(error.response);

    console.log("%c Error in interceptors", "color: blue", error);

    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          error.message = "未經過認證，請重新登入";
          // store.dispatch('logout');
          break;
        case 404:
          error.message = "請求網址不存在";
          // store.dispatch('logout');
          break;
      }
    }

    return error.message
      ? Promise.reject(error.message)
      : Promise.reject(error);

    // Do something with response error
    // return Promise.reject(error);
  }
);

axios
  .get("https://my-json-server.typicode.com/bcjohnblue/demo/posts")
  .then(response => {
    console.log("%c Response in callback", "color: blue", response);
  })
  .catch(error => {
    console.error("%c Error in callback", "color: blue", error);
  });

Vue.config.productionTip = false;

// window.axios = axios; => axios.get(url)
// global.axios = axios; => axios.get(url)
// Vue.prototype.$axios = axios; => this.$axios.get(url)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
