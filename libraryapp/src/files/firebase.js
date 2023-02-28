import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCIEGkJDK4ki-lp41cxBHULPbZX1sN9CNI",
  authDomain: "crud-app-react.firebaseapp.com",
  projectId: "crud-app-react",
  storageBucket: "crud-app-react.appspot.com",
  messagingSenderId: "263724024311",
  appId: "1:263724024311:web:0054eba062de7ba6356ef2",
  measurementId: "G-59981BVXVH"
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

export default fire;
