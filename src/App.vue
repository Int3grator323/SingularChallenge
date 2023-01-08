<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-btn @click="toDatabase" label="To Database">Admin</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import router from "@/router";
import { reactive } from "vue";
const state = reactive({
  adminToggle: false,
});
const toDatabase = () => {
  router.push({ name: "nametable" });
  state.adminToggle = !state.adminToggle;
};
</script>
