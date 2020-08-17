import * as firebase from "firebase";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA-DWIGYSJT2dABBDumyvYv5YLKxzcuT0g",
  authDomain: "reactnativeapp-691ad.firebaseapp.com",
  databaseURL: "https://reactnativeapp-691ad.firebaseio.com",
  projectId: "reactnativeapp-691ad",
  storageBucket: "reactnativeapp-691ad.appspot.com",
  messagingSenderId: "1083233958863",
  appId: "1:1083233958863:web:dbc9c054153d9be43a70ba",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
