<template>
  <div>
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <div class="d-flex justify-center mx-4">
            <v-img
              :src="require('../assets/SSLogo.png')"
              class="my-3"
              contain
              height="200"
              width="250"
            />
          </div>
        </v-col>
        <v-col class="primary">
          <h1 class="display-2 font-weight-bold mb-3 pt-3">
            Your Chosen Item is:
          </h1>

          <h2 class="Selection"></h2>

          <p class="subheading font-weight-regular">
            If you are happy with your choice, press Yes to submit, or No to
            choose a different option.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <p></p>
    <v-container class="grey lighten-2 mb-6 py-6">
      <v-row no-gutters>
        <v-col md="6">
          <v-card class="pa-2" outlined tile align="center">
            <v-btn
              @click="router.back()"
              label="To Registration"
              depressed
              width="150px"
              color="blue"
              class="pa-4"
              >No</v-btn
            >
          </v-card>
        </v-col>
        <v-col md="6">
          <v-card class="pa-2" outlined tile align="center">
            <v-btn
              @click="setUser"
              label="Yes"
              depressed
              width="150px"
              color="blue"
              class="pa-4"
              >Yes</v-btn
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import router from "@/router";
import { employeeStore } from "@/vueStore/employees";
import { storeToRefs } from "pinia";
import { useUserReg } from "@/vueStore/userReg";
import { useItemSelection } from "@/vueStore/itemSelection";
import { onMounted } from "vue";
const { getAllEmployees } = employeeStore();
const { email } = storeToRefs(useUserReg);
const { text } = storeToRefs(useItemSelection);
// const { employeeList } = storeToRefs(employeeStore());
onMounted(() => {
  console.log(email.value);
});
onMounted(() => {
  console.log(text.value);
});
onMounted(() => {
  getAllEmployees();
});
</script>
