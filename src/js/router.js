// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import { toggleState } from "./store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/demo",
    name: "Demo",
    component: () => import("@/views/Demo.vue"),
    children: [
      {
        name: 'editor',
        path: 'editor',
        component: () => import("@/components/MainEditor.vue")
      }
    ]
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

let toggleScroll = () => {

}

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
  if (to.name === 'editor' || from.name === 'editor') {
    toggleState('editor')
  }
});



export default router;
