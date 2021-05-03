import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyANy9G8v0klSfTfCtg_cuj1PBLTpu68oUQ",
    authDomain: "facebook-redesign.firebaseapp.com",
    projectId: "facebook-redesign",
    storageBucket: "facebook-redesign.appspot.com",
    messagingSenderId: "53819526462",
    appId: "1:53819526462:web:47f0c363af6554b670706f",
    measurementId: "G-PPTF1R1SNP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export  {  auth, provider };
  export default db;