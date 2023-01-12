import { defineStore } from "pinia";
import { updateChoice } from "@/firebaseInit";
export const useItemSelection = defineStore("itemSelection", {
  state: () => ({
    choice: "",
  }),
  actions: {
    getUserChoice(choice) {
      this.choice = choice;
    },
    updateUserChoice({ email, choice }) {
      updateChoice({ email, choice });
    },
  },
});
