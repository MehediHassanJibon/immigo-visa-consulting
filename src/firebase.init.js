// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKO1br6U0r6EhE6TP8QN79Hgpkd0-XVXI",
  authDomain: "immigo-visa-consulting.firebaseapp.com",
  projectId: "immigo-visa-consulting",
  storageBucket: "immigo-visa-consulting.appspot.com",
  messagingSenderId: "133718343798",
  appId: "1:133718343798:web:b7eff8428aa4e7cfac5f57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;