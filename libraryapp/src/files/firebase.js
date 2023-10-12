import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAQaJGnXaL6GLwfubQ-Qz52vM7LQ1n9fmg",
  authDomain: "library-managment-5e555.firebaseapp.com",
  databaseURL: "https://library-managment-5e555-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "library-managment-5e555",
  storageBucket: "library-managment-5e555.appspot.com",
  messagingSenderId: "615834683613",
  appId: "1:615834683613:web:3c4e87db78fa412e3ef334",
  measurementId: "G-0JDVKN7EHH"
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

export default fire;
