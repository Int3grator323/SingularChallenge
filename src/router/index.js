import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: () => import("@/components/HelloWorld.vue"),
      // children: [
      //   {
      //     path: '',
      //     name: 'email_signin',
      //     component: () => import( '@/components/signin/Email.vue'),
      //   },
      // ]
    },
  ],
});

export default router;
