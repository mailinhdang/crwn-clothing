import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCi9UjuY7Gl0iuhna_86NJd7EMtBXvwCdM",
  authDomain: "crwn-db-3d75b.firebaseapp.com",
  projectId: "crwn-db-3d75b",
  storageBucket: "crwn-db-3d75b.appspot.com",
  messagingSenderId: "987743202314",
  appId: "1:987743202314:web:0e128470ed3f103e3183f3",
  measurementId: "G-LHD4KM7FL9"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
