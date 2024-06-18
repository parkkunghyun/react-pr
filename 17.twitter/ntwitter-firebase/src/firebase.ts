// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLO8qMHniSUNBIUZxLiZ1H2nIkgaf59bU",
  authDomain: "nwitter-reloaded-5d77e.firebaseapp.com",
  projectId: "nwitter-reloaded-5d77e",
  storageBucket: "nwitter-reloaded-5d77e.appspot.com",
  messagingSenderId: "912817368106",
  appId: "1:912817368106:web:59fb4c3b31ae55fe39e753",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // 직접 추가해준 auth
