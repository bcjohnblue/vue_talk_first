import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

// import Table from "./views/Table.vue";
// import Table2 from "./views/Table2.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    // {
    //   path: "/table",
    //   name: "Table",
    //   component: Table
    // },
    // {
    //   path: "/table2",
    //   name: "Table2",
    //   component: Table2
    // },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
