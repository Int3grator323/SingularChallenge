import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCuGTQjuk2IygwMoF_V-RusSMzKc9NBsjQ",
  authDomain: "codingchallenge-14fd8.firebaseapp.com",
  projectId: "codingchallenge-14fd8",
  storageBucket: "codingchallenge-14fd8.appspot.com",
  messagingSenderId: "606578252997",
  appId: "1:606578252997:web:06f2badc634ef30bff64ac",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();

//create employee
export const createEmployee = (value) => {
  return db
    .collection("employees")
    .doc(value.email.toUpperCase().trim())
    .set(value)
    .then(() => {
      console.log("Document successfully written!");
      // alert("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};
//get all employees
export const getEmployeeDetails = () => {
  return db.collection("employees").get();
};
//deleting an employee
export const removeEmployeeDetails = (value) => {
  return db
    .collection("employees")
    .doc(value.toUpperCase().trim())
    .delete()
    .then(() => {
      console.log("Deleted!");
    })
    .catch((error) => {
      console.error("No such entry", error);
    });
};
//update the employee details
export const updateEmployeeDetails = (data) => {
  return db
    .collection("employees")
    .doc(data.email.toUpperCase().trim())
    .set(data);
};

// updating choice made to database
export const updateChoice = ({ email, choice }) => {
  return db
    .collection("employees")
    .doc(email.toUpperCase().trim())
    .update({ choice: choice });
  // .then(() => {
  //   alert("Success!");
  // });
};
