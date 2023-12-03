// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR5TPZzouMHbyVJBiIZAvK-3p2cQg3vgw",
  authDomain: "netflixgpt-af5b6.firebaseapp.com",
  projectId: "netflixgpt-af5b6",
  storageBucket: "netflixgpt-af5b6.appspot.com",
  messagingSenderId: "591811628057",
  appId: "1:591811628057:web:17b2ee5367bb1815c12e88",
  measurementId: "G-4F0MDV33H6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); 