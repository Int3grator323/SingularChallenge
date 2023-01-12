import {
  getEmployeeDetails,
  updateEmployeeDetails,
  removeEmployeeDetails,
} from "@/firebaseInit";
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
    editEmployeesDetails(item) {
      console.log(item);
      updateEmployeeDetails(item)
        .then(() => {
          console.log("Document successfully written!");
          const index = this.employeeList.findIndex(
            (data) => data.email === item.email
          );
          if (index > -1) {
            this.employeeList[index] = item;
          }
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    },
    deleteEmployeesDetails(item) {
      removeEmployeeDetails(item)
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error deleting document: ", error);
        });
    },
  },
});
