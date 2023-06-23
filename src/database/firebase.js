import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbOJb8uhG8JPWZCxS28my5B4GADb2WYes",
  authDomain: "food-delivery-b4747.firebaseapp.com",
  projectId: "food-delivery-b4747",
  storageBucket: "food-delivery-b4747.appspot.com",
  messagingSenderId: "979940607456",
  appId: "1:979940607456:web:6ebfa5a013be211d4a1785",
  measurementId: "G-4B9LJGFNM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
export {auth,db};

