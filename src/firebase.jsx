// import firebase from 'firebase';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJNF3b_ciP26EilwlKY9nHkSjSlRh9ITM",
  authDomain: "slack-clone-a079b.firebaseapp.com",
  databaseURL: "https://slack-clone-a079b-default-rtdb.firebaseio.com",
  projectId: "slack-clone-a079b",
  storageBucket: "slack-clone-a079b.appspot.com",
  messagingSenderId: "345865012234",
  appId: "1:345865012234:web:c04e70dce6399e6ff80bf3",
  measurementId: "G-HDXBZ6Q6ZV"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()




  export {auth, provider }
  export default db;