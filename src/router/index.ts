import { createRouter, createWebHistory } from 'vue-router';

const routerOptions = [
  { path: "/", alias: "/home", view: "Home", meta: { requiresAuth: true } },
  { path: "/about", view: "About" },
  { path: "/services", view: "Services" },
  { path: "/contact", view: "Contact" },
  { path: "/:pathMatch(.*)*", view: "NotFound" }
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`../views/${route.view}.vue`)
  };
});

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;