<template>
  <div>
    <!-- Singular Systems Logo -->
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

        <!-- Welcome banner -->
        <v-col class="primary">
          <h1 class="display-2 font-weight-bold mb-3 pt-3">Registration</h1>

          <p class="subheading font-weight-regular">
            Please enter your details and click submit to register!
            <br />Once registered press next to continue!
          </p>
        </v-col>
      </v-row>

      <!-- Form -->
      <v-col>
        <h2 align="center" justify="center">Add User:</h2>
        <validation-observer ref="observer" v-slot="{ invalid, handleSubmit }">
          <v-form
            @submit.stop.prevent="handleSubmit(create)"
            @keyup.enter="handleSubmit(create)"
            slot="form"
          >
            <div class="px-4">
              <div
                class="scrollable"
                :class="{ mobile: $vuetify.breakpoint.smAndDown }"
              >
                <v-row no-gutters>
                  <v-col cols="12" class="pt-1">
                    <validation-provider v-slot="{ errors }" name="name">
                      <v-text-field
                        dense
                        outlined
                        color="accent"
                        :error-messages="errors"
                        label="Name"
                        v-model="state.employeesData.name"
                        autofocus
                      />
                      <v-text-field
                        dense
                        outlined
                        color="accent"
                        :error-messages="errors"
                        label="Email"
                        v-model="state.employeesData.email"
                      />
                      <v-text-field
                        dense
                        outlined
                        color="accent"
                        :error-messages="errors"
                        label="Phone"
                        v-model="state.employeesData.phone"
                      />
                    </validation-provider>
                  </v-col>
                </v-row>
              </div>
            </div>
            <v-container class="grey lighten-2 mb-6 py-6">
              <v-row no-gutters>
                <v-col>
                  <v-card class="pa-2" outlined tile align="center">
                    <v-btn
                      type="submit"
                      depressed
                      @click="routeToItems"
                      label="To test"
                      color="blue"
                      :disabled="invalid"
                      width="150px"
                    >
                      Submit
                    </v-btn>
                  </v-card>
                </v-col>
                <!-- <v-col md="6">
                  <v-card class="pa-2" outlined tile align="center">
                    <v-btn
                      @click="routeToItems"
                      label="To test"
                      depressed
                      color="blue"
                      class="pa-4"
                      width="150px"
                      >Next</v-btn
                    >
                  </v-card>
                </v-col> -->
              </v-row>
            </v-container>
          </v-form>
        </validation-observer>
      </v-col>
    </v-container>
  </div>
</template>

<script setup>
import router from "@/router";
import { reactive } from "vue";
import { createEmployee } from "@/firebaseInit";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { useUserReg } from "@/vueStore/userReg";

const state = reactive({
  employeesData: {
    name: "",
    email: "",
    phone: "",
  },
});

const { getUserEmail } = useUserReg();
const setUser = () => {
  getUserEmail(state.employeesData.email);
};

const create = () => {
  createEmployee(state.employeesData);
};

const routeToItems = () => {
  setUser();
  router.push({ name: "itemselection" });
};
</script>
