import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBYVfOR-A4v6MJIhWHQeU14uFtwfYZnuUE",
  authDomain: "crown-db-86fe2.firebaseapp.com",
  projectId: "crown-db-86fe2",
  storageBucket: "crown-db-86fe2.appspot.com",
  messagingSenderId: "107895838378",
  appId: "1:107895838378:web:909c542400d2afd747e2d3",
  measurementId: "G-SNK6B0EJ0E"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;