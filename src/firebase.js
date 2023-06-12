// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword  } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlwKwiGQ52kB3HsfWChCxRT8fzT1XjSZU",
  authDomain: "netflix-clone-2-a08fc.firebaseapp.com",
  projectId: "netflix-clone-2-a08fc",
  storageBucket: "netflix-clone-2-a08fc.appspot.com",
  messagingSenderId: "964605882",
  appId: "1:964605882:web:e3412b0f863333fcb30f83",
  measurementId: "G-DKFY9JRDQ3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
