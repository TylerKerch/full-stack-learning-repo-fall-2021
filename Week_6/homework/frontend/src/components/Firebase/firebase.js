// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQgY9DezDkCX6Mcp1eODwYXGE3_oCd1xo",
  authDomain: "todo-a89a0.firebaseapp.com",
  projectId: "todo-a89a0",
  storageBucket: "todo-a89a0.appspot.com",
  messagingSenderId: "193059491004",
  appId: "1:193059491004:web:73901a9310ae6bbc0d54b9",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {auth, firebase};