import firebase from "firebase"

// const firebaseApp = firebase.initializeApp ({
//   apiKey: "AIzaSyC-D9Pib4RzYAkCQK-TfMp20hGHWA4guTk",
//   authDomain: "insta-e6a3c.firebaseapp.com",
//   databaseURL: "https://insta-e6a3c.firebaseio.com",
//   projectId: "insta-e6a3c",
//   storageBucket: "insta-e6a3c.appspot.com",
//   messagingSenderId: "99667606782",
//   appId: "1:99667606782:web:1833acf8a1387c6211b9af",
//   measurementId: "G-QRN9M76LCK"
// });
const firebaseApp = {
  apiKey: "AIzaSyBpf4iQMLJ1IZ8Nqw24Jt9gOgkAJv7trWk",
  authDomain: "pistic.firebaseapp.com",
  projectId: "pistic",
  storageBucket: "pistic.appspot.com",
  messagingSenderId: "992689298451",
  appId: "1:992689298451:web:83040bfb84e45620e433e6",
  measurementId: "G-JZYDKWSTHT"
};
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth,storage};