import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCF1Gs22jYNTjmkhg1QYFWOFJ1xMX8rHBU",
  authDomain: "mymoney-6c56d.firebaseapp.com",
  projectId: "mymoney-6c56d",
  storageBucket: "mymoney-6c56d.appspot.com",
  messagingSenderId: "965622722607",
  appId: "1:965622722607:web:a2b9439beea3baa364d6da",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
