<template>
  <div>
    <!-- Second page singular logo -->
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
          <h1 class="display-2 font-weight-bold mb-3 pt-3">
            Welcome to menu selection
          </h1>

          <p class="subheading font-weight-regular">
            Please make a meal selection for the year end function! Scroll
            through the images below to choose an option,
            <br />please make a selection and click Choose Option.
          </p>
        </v-col>

        <!-- Carousel -->
        <v-col class="mb-5" cols="12">
          <h1 class="display-1 font-weight-bold mb-5">
            {{ state.options[state.model].text }}
          </h1>

          <v-row justify="center">
            <v-carousel v-model="state.model" hide-delimiter-background>
              <v-carousel-item
                v-for="(option, i) in state.options"
                :key="i"
                :src="require(`../assets/${option.href}`)"
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
              </v-carousel-item>
            </v-carousel>
          </v-row>
        </v-col>

        <v-container class="grey lighten-2 mb-6 py-6">
          <v-row no-gutters>
            <v-col md="6">
              <v-card class="pa-2" outlined tile>
                <v-btn
                  @click="router.back()"
                  label="To Registration"
                  depressed
                  width="150px"
                  color="blue"
                  class="pa-4"
                  >Back</v-btn
                >
              </v-card>
            </v-col>
            <v-col md="6">
              <v-card class="pa-2" outlined tile>
                <v-btn
                  @click="routeToCart"
                  label="To test"
                  depressed
                  width="150px"
                  color="blue"
                  class="pa-4"
                  >Choose</v-btn
                >
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import router from "@/router";
import { reactive } from "vue";
import { useItemSelection } from "@/vueStore/itemSelection";
const state = reactive({
  model: 0,
  options: [
    {
      text: "Beef Burger",
      href: "beef-burger.jpg",
    },
    {
      text: "Chicken Burger",
      href: "chicken-burger.jpg",
    },
    {
      text: "Vegan Burger",
      href: "veggie-burger.jpg",
    },
    {
      text: "Chicken Nuggets",
      href: "chicken-nuggets.jpg",
    },
    {
      text: "Pizza",
      href: "pizza.jpg",
    },
    {
      text: "Half Chicken",
      href: "half-chicken-and-chips.jpg",
    },
    {
      text: "Ceasar Salad",
      href: "caesar-salad.jpg",
    },
    {
      text: "Pancakes",
      href: "pancakes.jpg",
    },
    {
      text: "Plate of Chips",
      href: "chips.jpg",
    },
    {
      text: "Curry and Rice",
      href: "mince-curry.jpg",
    },
  ],
});

// Sets the itemSelection store's choice equal to the caroucels choice chosen to keep track what choice was made
const { getUserChoice } = useItemSelection();
const setChoice = () => {
  getUserChoice(state.options[state.model].text);
};

//Routing to cart page and calling setChoice
const routeToCart = () => {
  setChoice();
  router.push({ name: "shoppingcart" });
};
</script>
