import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import GiteView from "../views/GiteView.vue";
import VillageView from "../views/VillageView.vue";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/gites/:id",
      component: GiteView,
    },
    {
      path: "/village",
      component: VillageView,
    },
    {
      path: "/contact",
      component: ContactView,
    },
  ],
});

export default router;