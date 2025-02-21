// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUa_v7RrB8Q_3Caa1LkubnUh46lyD1bKo",
  authDomain: "gpu4u-4b8e9.firebaseapp.com",
  databaseURL: "https://gpu4u-4b8e9-default-rtdb.firebaseio.com",
  projectId: "gpu4u-4b8e9",
  storageBucket: "gpu4u-4b8e9.firebasestorage.app",
  messagingSenderId: "221814381380",
  appId: "1:221814381380:web:e51993a307e3f75da1d511",
  measurementId: "G-H7BPKJNQ86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { auth, db };
