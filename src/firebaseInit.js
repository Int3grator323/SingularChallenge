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
export const createEmployee = (value) => {
  return db
    .collection("employees")
    .add(value)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};
export const getEmployeeDetails = () => {
  return db.collection("employees").get();
};
export const removeEmployeeDetails = (value) => {
  return db
    .collection("employees")
    .doc(value)
    .delete()
    .then(() => {
      console.log("Deleted!");
    })
    .catch((error) => {
      console.error("No such entry", error);
    });
};
export const updateEmployeeDetails = (data) => {
  return db.collection("employees").doc(data.email).set({
    name: data.name,
    email: data.email,
    phone: data.phone,
  });
};
