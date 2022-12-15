import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import router from "./router";
import pinia from "./vueStore";
import './plugins/element.js'

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  vuetify,
  router,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
