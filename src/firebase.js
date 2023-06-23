// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd5JCyEmnkXPxjSBQuoT9u7ttWFlsF9WA",
  authDomain: "tps-umg.firebaseapp.com",
  projectId: "tps-umg",
  storageBucket: "tps-umg.appspot.com",
  messagingSenderId: "211284869618",
  appId: "1:211284869618:web:ac6b06a5283d45983c2b6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)