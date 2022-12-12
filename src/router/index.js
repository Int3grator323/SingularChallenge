import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/HelloWorld.vue"),
    },
    {
      path: "/cart",
      name: "shoppingcart",
      component: () => import("@/components/ShoppingCart.vue"),
    },
  ],
});

export default router;
