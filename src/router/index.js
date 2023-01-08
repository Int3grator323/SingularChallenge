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
      path: "/item",
      name: "itemselection",
      component: () => import("@/components/ItemSelection.vue"),
    },
    {
      path: "/cart",
      name: "shoppingcart",
      component: () => import("@/components/ShoppingCart.vue"),
    },
    {
      path: "/db",
      name: "nametable",
      component: () => import("@/components/NameTable.vue"),
    },
  ],
});

export default router;
