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
  apiKey: "AIzaSyDVBECa7bRU357mHToYIe8a2bsq3p4QnOo",
  authDomain: "bunny-lovers-d8ce3.firebaseapp.com",
  projectId: "bunny-lovers-d8ce3",
  storageBucket: "bunny-lovers-d8ce3.appspot.com",
  messagingSenderId: "89832619579",
  appId: "1:89832619579:web:1ba10c0035740bde9aa61e",
  measurementId: "G-DK7WTSB7C2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const analytics = getAnalytics(app);
export const storage = getStorage(app);