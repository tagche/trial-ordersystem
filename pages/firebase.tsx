// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeV7wgtrSSdJAuJD3HxLX5uD7NTbjsbMY",
  authDomain: "portfolio-ordersystem.firebaseapp.com",
  projectId: "portfolio-ordersystem",
  storageBucket: "portfolio-ordersystem.appspot.com",
  messagingSenderId: "1066013784113",
  appId: "1:1066013784113:web:b19de4eefff38023b8fd10",
  measurementId: "G-LRGPTHJFGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db