import firebase from "firebase"

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyCX0ShsW1PzTDyLYqBm7EPTgOsknicdUQg",
//   authDomain: "instaguram.firebaseapp.com",
//   databaseURL: "https://instaguram.firebaseio.com",
//   projectId: "instaguram",
//   storageBucket: "instaguram.appspot.com",
//   messagingSenderId: "515841607846",
//   appId: "1:515841607846:web:47732c6c1ef30cb7314c67",
//   measurementId: "G-41794C202E"
// });
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyADTIPKHgk31lti48-kyLdFwdt8f7SmHwc",
  authDomain: "banded-pad-282116.firebaseapp.com",
  databaseURL: "https://banded-pad-282116.firebaseio.com",
  projectId: "banded-pad-282116",
  storageBucket: "banded-pad-282116.appspot.com",
  messagingSenderId: "723493373017",
  appId: "1:723493373017:web:e61ec9b2051653197a1d48",
  measurementId: "G-MB7HRJEZ3R"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth,storage};