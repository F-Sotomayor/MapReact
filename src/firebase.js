import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBKLO0nvS0yshEtjZRan_5MauJeNsnnT5E",
  authDomain: "mapa-js-b02df.firebaseapp.com",
  databaseURL: "https://mapa-js-b02df.firebaseio.com",
  projectId: "mapa-js-b02df",
  storageBucket: "mapa-js-b02df.appspot.com",
  messagingSenderId: "264259426226",
  appId: "1:264259426226:web:53106c5d121c1f95b936ab",
});

const database = firebase.firestore();
const auth = firebase.auth();
const providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};

export { database, auth, providers };
export default firebase;
