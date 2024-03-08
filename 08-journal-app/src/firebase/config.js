// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6wfY4WaF6TG67XuuGT3iiH_EMaTInXfo",
  authDomain: "curso-react-fernando-a12b7.firebaseapp.com",
  projectId: "curso-react-fernando-a12b7",
  storageBucket: "curso-react-fernando-a12b7.appspot.com",
  messagingSenderId: "362137579502",
  appId: "1:362137579502:web:05f41fff551ea04ce4e8ff"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );