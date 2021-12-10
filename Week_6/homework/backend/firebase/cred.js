const firebase = require("firebase-admin");
const credentials = require("./cred.json");
//firebase admin
//firebase is something to call and get credentials from
//firebase on the frontend
firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
  databaseURL: "https://<yoururl>.firebaseio.com",
});

module.exports = firebase;
