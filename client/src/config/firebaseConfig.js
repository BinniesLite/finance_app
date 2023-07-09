// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// ​​import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut} from "firebase/auth";
  // ​​import {
  // ​​  getFirestore,
  // ​​  query,
  // ​​  getDocs,
  // ​​  collection,
  // ​​  where,
  // ​​  addDoc,
  // ​​} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXhvvUkXdYwR-9jHJjZMAvcMmeG3fJ_q0",
  authDomain: "bunny-lover.firebaseapp.com",
  projectId: "bunny-lover",
  storageBucket: "bunny-lover.appspot.com",
  messagingSenderId: "121089995007",
  appId: "1:121089995007:web:adb4260364d26b20725cca",
  measurementId: "G-KQ2YNRKW9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const analytics = getAnalytics(app);
export const storage = getStorage(app);