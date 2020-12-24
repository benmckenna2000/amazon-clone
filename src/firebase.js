import firebase from "firebase";
// eslint-disable-next-line
const firebaseConfig = {
  apiKey: "AIzaSyA1rMyHexpB91lpQmpHZJUFuGZbgGhRG0c",
  authDomain: "clone-47a9d.firebaseapp.com",
  projectId: "clone-47a9d",
  storageBucket: "clone-47a9d.appspot.com",
  messagingSenderId: "242569356808",
  appId: "1:242569356808:web:bde96d9843861195da13bd",
  measurementId: "G-2BQXSBZWWT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
