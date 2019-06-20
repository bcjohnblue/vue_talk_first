import Vue from "vue";
// import axios from "./interceptor";
import apiList from "./apiList";

Vue.prototype.$axios = apiList; // this.$axios.get(url, configs)
