// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCzk0nLUAdZ670UZX36puXc_2oOjlwiIrs",
  authDomain: "react-practice-fc8d7.firebaseapp.com",
  projectId: "react-practice-fc8d7",
  storageBucket: "react-practice-fc8d7.appspot.com",
  messagingSenderId: "814575450569",
  appId: "1:814575450569:web:3669bace79f40e97c9d018",
  measurementId: "G-9KTYMXQJBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;