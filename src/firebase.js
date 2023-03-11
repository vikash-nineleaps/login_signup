// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_DlFq5UQ6UeHqJNgze3QeByokSL_WvOI",
  authDomain: "login-signup-a460a.firebaseapp.com",
  projectId: "login-signup-a460a",
  storageBucket: "login-signup-a460a.appspot.com",
  messagingSenderId: "755716454669",
  appId: "1:755716454669:web:b76e48ade6c5582d781844"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);