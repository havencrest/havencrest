import { createRouter, createWebHistory } from "vue-router";
import { HomeView } from "@/views";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
