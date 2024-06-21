// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-PMOr2GyQlyxMKZXMYCn_-fHtMk1B5tc",
  authDomain: "ptwitter-e2ac0.firebaseapp.com",
  projectId: "ptwitter-e2ac0",
  storageBucket: "ptwitter-e2ac0.appspot.com",
  messagingSenderId: "598414501452",
  appId: "1:598414501452:web:a9652bc2cbaae4ba1876e9",
  measurementId: "G-DJ8X63JTX9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
