import { defineStore } from "pinia";
export const useUserReg = defineStore("userReg", {
  state: () => ({
    email: "",
  }),
  actions: {
    getUserEmail(email){
      this.email = email
    }
  },
});
