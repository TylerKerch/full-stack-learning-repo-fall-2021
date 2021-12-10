const firebase = require("firebase-admin");
const credentials = require("./cred.json");

//initializeApp (how does this work?)
firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
  databaseURL: "https://<yourproject>.firebaseio.com",
});

module.exports = firebase;
