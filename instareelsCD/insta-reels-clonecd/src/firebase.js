import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyC2_kDtZmy0VBEh_xsPnGURAVARRX9st9Y",
    authDomain: "instareels-b5a66.firebaseapp.com",
    databaseURL: "https://instareels-b5a66.firebaseio.com",
    projectId: "instareels-b5a66",
    storageBucket: "instareels-b5a66.appspot.com",
    messagingSenderId: "428190655950",
    appId: "1:428190655950:web:0cbbc3d48bd5aef9aef79f",
    measurementId: "G-RJPPXFLZ8V"
  };

  const firebaseApp = firebase.intitalizeApp(firebaseConfig);

  const db= firebaseApp.firestore();

  export default db;