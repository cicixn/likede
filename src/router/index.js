import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: () => import("@/views/Login"),
  },
  {
    path: "/",
    component: () => import("@/views/Layout"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/Home"),
      },
      {
        path: "/task/business",
        component: () => import("@/views/Task/Business"),
      },
      {
        path: "/task/operation",
        component: () => import("@/views/Task/Operation"),
      },
      {
        path: "/node/region",
        component: () => import("@/views/Node/Region"),
      },
      {
        path: "/node/partner",
        component: () => import("@/views/Node/Partner"),
      },
      {
        path: "/node/node",
        component: () => import("@/views/Node/Node"),
      },
      {
        path: "/vm/index",
        component: () => import("@/views/Vm/Index"),
      },
      {
        path: "/vm/status",
        component: () => import("@/views/Vm/Status"),
      },
      {
        path: "/vm/type",
        component: () => import("@/views/Vm/Type"),
      },
      {
        path: "/user/index",
        component: () => import("@/views/User/Index"),
      },
      {
        path: "/user/user-task-stats",
        component: () => import("@/views/User/User-task-stats"),
      },
      {
        path: "/user/user-work",
        component: () => import("@/views/User/User-work"),
      },
      {
        path: "/sku/sku-class",
        component: () => import("@/views/Sku/Sku-class"),
      },
      {
        path: "/sku/sku",
        component: () => import("@/views/Sku/Sku"),
      },
      {
        path: "/policy/index",
        component: () => import("@/views/Policy"),
      },
      {
        path: "/order/index",
        component: () => import("@/views/order"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
