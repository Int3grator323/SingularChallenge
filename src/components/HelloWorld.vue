<template>
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
          Welcome to menu selection
        </h1>

        <p class="subheading font-weight-regular">
          Please make a meal selection for the year end function! Scroll through
          the images below to choose an option,
          <br />please make a selection and click Choose Option.
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h1 class="display-1 font-weight-bold mb-5">
          {{ state.colors[state.model].text }}
        </h1>

        <v-row justify="center">
          <v-carousel v-model="state.model" hide-delimiter-background>
            <v-carousel-item
              v-for="(color, i) in state.colors"
              :key="i"
              :src="require(`../assets/${color.href}`)"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
            </v-carousel-item>
          </v-carousel>
        </v-row>
      </v-col>

      <v-container class="grey lighten-2 mb-6 py-6">
        <v-row align="center" justify="center">
          <v-btn @click="routeToTest" label="To test">Choose Option</v-btn>
        </v-row>
      </v-container>

      <!-- <div class="d-flex justify-center mx-4">
        <v-btn @click="routeToTest" label="To test">To Cart</v-btn>
      </div> -->

      <!-- <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in state.importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col> -->

      <!-- <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in state.ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script setup>
import router from "@/router";
import { reactive } from "vue";
const state = reactive({
  ecosystem: [
    {
      text: "vuetify-loader",
      href: "https://github.com/vuetifyjs/vuetify-loader",
    },
    {
      text: "github",
      href: "https://github.com/vuetifyjs/vuetify",
    },
    {
      text: "awesome-vuetify",
      href: "https://github.com/vuetifyjs/awesome-vuetify",
    },
  ],
  importantLinks: [
    {
      text: "Documentation",
      href: "https://vuetifyjs.com",
    },
    {
      text: "Chat",
      href: "https://community.vuetifyjs.com",
    },
    {
      text: "Made with Vuetify",
      href: "https://madewithvuejs.com/vuetify",
    },
    {
      text: "Twitter",
      href: "https://twitter.com/vuetifyjs",
    },
    {
      text: "Articles",
      href: "https://medium.com/vuetify",
    },
  ],
  model: 0,
  colors: [
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

const routeToTest = () => {
  router.push({ name: "shoppingcart" });
};
</script>
