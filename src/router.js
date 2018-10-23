import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home", webpackPrefetch: true */ "./views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about", webpackPrefetch: true */ "./views/About.vue")
    },
    {
      path: "/dynamic-route",
      name: "dynamicRoute",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "dynamic-route", webpackPrefetch: true */ "./views/DynamicRoute.vue")
    },
    {
      path: "/on-demand-content",
      name: "onDemandContent",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "on-demand", webpackPrefetch: true */ "./views/OnDemand.vue")
    },
    {
      path: "/component-is",
      name: "componentIs",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "component-is", webpackPrefetch: true */ "./views/ComponentIs.vue")
    }
  ]
});
