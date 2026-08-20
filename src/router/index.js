import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import GiteView from "../views/GiteView.vue";
import VillageView from "../views/VillageView.vue";
import ContactView from "../views/ContactView.vue";
import ReservationView from "../views/ReservationView.vue";
import LegalNoticeView from "../views/LegalNoticeView.vue";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0 };
  },
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
    {
      path: "/reservation",
      component: ReservationView,
    },
    {
      path: "/mentions-legales",
      component: LegalNoticeView,
    },
  ],
});

export default router;