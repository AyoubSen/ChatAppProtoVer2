import firebase from "firebase";

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp({
      apiKey: "AIzaSyA030lyJlZWG6c9u-dZ2gS698DW-leAJUY",
  authDomain: "calendar-2b49d.firebaseapp.com",
  projectId: "calendar-2b49d",
  storageBucket: "calendar-2b49d.appspot.com",
  messagingSenderId: "433616905262",
  appId: "1:433616905262:web:d45421dc9556d2a7396bbf"

    })
  : firebase.app();

const db = firebaseApp.firestore();

export default db;
