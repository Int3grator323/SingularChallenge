import { defineStore } from "pinia";
export const useItemSelection = defineStore("itemSelection", {
  state: () => ({
    choice: "",
  }),
  actions: {
    getUserChoice(choice) {
      this.choice = choice;
    },
  },
});
