import firebase from "firebase";
// eslint-disable-next-line
const firebaseConfig = {
  apiKey: "AIzaSyBWyWqmnDspatu_Fe2MT5OmffkXgrqV-Tg",
  authDomain: "clone-bd22e.firebaseapp.com",
  projectId: "clone-bd22e",
  storageBucket: "clone-bd22e.appspot.com",
  messagingSenderId: "537871846319",
  appId: "1:537871846319:web:473f5001877a27447abd5a",
  measurementId: "G-F236Y066G9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
