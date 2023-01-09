import { getEmployeeDetails } from "@/firebaseInit";
import { defineStore } from "pinia";
export const employeeStore = defineStore("employees", {
  state: () => ({
    employeeList: [],
  }),
  actions: {
    getAllEmployees() {
      getEmployeeDetails().then((employeeData) => {
        employeeData.docs.forEach((value) => {
          if (this.employeeList.length > 0) {
            const index = this.employeeList.findIndex(
              (data) => data.email === value.data()?.email
            );
            if (index > -1) {
              this.employeeList[index] = value.data();
              return;
            }
          }
          this.employeeList.push(value.data());
        });
      });
    },
  },
});
