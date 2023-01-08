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
        <v-col class="primary">
          <h1 class="display-2 font-weight-bold mb-3 pt-3">Database</h1>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Email</th>
                  <th class="text-left">Phone Number</th>
                  <th class="text-left">Choice</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in getUserdetails" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.number }}</td>
                  <td>{{ item.choice }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
// import router from "@/router";
import * as FirestoreService from "@/firebaseInit";
const getUserdetails = () => {
  let temp = [];
  FirestoreService.getEmployeeDetails().then(function (employeeData) {
    employeeData.forEach(function (employeeDetails) {
      temp.push(employeeDetails.data());
    });
    console.log("Success!\n", temp.sort());
  });
};
</script>
