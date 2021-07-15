import firebase from "firebase";

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp({
  apiKey: "AIzaSyBgqUxQ792Ykt7H03V3MkVzL58Dyon0BIs",
  authDomain: "newfirebaseforchatapp.firebaseapp.com",
  projectId: "newfirebaseforchatapp",
  storageBucket: "newfirebaseforchatapp.appspot.com",
  messagingSenderId: "125341023727",
  appId: "1:125341023727:web:a9dc308e1d09f690ecca1a"

    })
  : firebase.app();

const db = firebaseApp.firestore();

export default db;
