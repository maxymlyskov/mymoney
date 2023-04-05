import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAsDnqinstibe69dGyqL4KDkvK82U5OwP0",
    authDomain: "mymoneywallet-8b50b.firebaseapp.com",
    projectId: "mymoneywallet-8b50b",
    storageBucket: "mymoneywallet-8b50b.appspot.com",
    messagingSenderId: "956802613729",
    appId: "1:956802613729:web:cae061742ce7e831bb12a0"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init service

const projectFirestore = firebase.firestore()

export { projectFirestore }