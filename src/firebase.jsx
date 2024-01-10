// import firebase from 'firebase';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
  "projectId": "challenge-cloneslack",
  "appId": "1:456388828685:web:e286f0515f8fc2f6cd3f44",
  "storageBucket": "challenge-cloneslack.appspot.com",
  "apiKey": "AIzaSyA5IXJXlj6zh-ZOB7yp7LjQpBcHlo83W0Q",
  "authDomain": "challenge-cloneslack.firebaseapp.com",
  "messagingSenderId": "456388828685"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()




  export {auth, provider }
  export default db;