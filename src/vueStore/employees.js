import { getEmployeeDetails } from "@/firebaseInit";
import { defineStore } from "pinia";
export const employeeStore = defineStore("employees", {
  state: () => ({
    employeeList: [],
  }),
  actions: {
    async getAllEmployees() {
      getEmployeeDetails().then(function (employeeData) {
        this.upsert(employeeData);
      });
    },
    upsert(data) {
      data.forEach(function (employeeDetails) {
        this.employeeList.push(employeeDetails.data());
      });
    },
  },
});
