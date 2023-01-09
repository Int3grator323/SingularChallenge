<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-btn
          @click="state.adminToggle ? toHome() : toDatabase()"
          label="To Database"
        >
          {{ state.adminToggle ? "Home" : "Database" }}</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import router from "@/router";
import { onMounted, reactive } from "vue";
const state = reactive({
  adminToggle: false,
});

onMounted(() => {
  // Toggle button top right
  if (router.currentRoute.name == "nametable") {
    state.adminToggle = true;
  } else {
    state.adminToggle = false;
  }
});

// methods
const toDatabase = () => {
  router.push({ name: "nametable" });
};
const toHome = () => {
  router.push({ name: "home" });
};
const beforeRouteUpdate = async (to, from, next) => {
  if (to.name == "home") {
    state.adminToggle = false;
  } else if (to.path.includes("db")) {
    state.adminToggle = true;
  } else {
    state.adminToggle = true;
  }
  next();
};
router.beforeEach(beforeRouteUpdate);
// const toDatabase = () => {
//   router.push({ name: "nametable" });
//   state.adminToggle = !state.adminToggle;
// };
</script>
