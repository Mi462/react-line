import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAuXnpgr42zESyQnEROWoSlOiS_A1EAFuM",
  authDomain: "line-clone-2fdf5.firebaseapp.com",
  projectId: "line-clone-2fdf5",
  storageBucket: "line-clone-2fdf5.appspot.com",
  messagingSenderId: "478450356453",
  appId: "1:478450356453:web:4b2576fb3a7facb2c5840c"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};