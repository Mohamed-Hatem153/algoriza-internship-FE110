import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const isAuth = localStorage.getItem("loggedInUser");
// import {useUserStore} from '@/stores/UserStore'
// const userStore = useUserStore()
const requireAuth = (to, from, next) => {
  if (isAuth) {
    next(); // Redirect to login if not authenticated
  } else {
    next("/sign-in");
  }
};
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'sign-in' && !useUserStore().isAuth) next({ name: 'sign-in' })
//   else next()
// })

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "My Dream Place",
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
    meta: {
      title: "Register",
    },
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("../views/SignIn.vue"),
    meta: {
      title: "Sign in",
    },
  },
  {
    path: "/search-results",
    name: "search-results",
    component: () => import("../views/SearchResults.vue"),
    beforeEnter: requireAuth,
    meta: {
      title: "Hotels",
    },
  },
  {
    path: "/search-results/:hotelId",
    name: "hotel-details",
    component: () => import("../views/HotelDetails.vue"),
    props: true,
    beforeEnter: requireAuth,
    meta: {
      title: "Hotel details",
    },
  },
  {
    path: "/payment",
    name: "payment",
    beforeEnter: requireAuth,
    component: () => import("../views/Payment.vue"),
    props: true,
    meta: {
      title: "Payment",
    },
  },
  {
    path: "/trips",
    name: "trips",
    beforeEnter: requireAuth,
    component: () => import("../views/MyTrips.vue"),
    meta: {
      title: "My trips",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
