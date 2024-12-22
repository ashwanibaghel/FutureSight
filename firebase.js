// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgXroVrYrO26fUcjIU8LoS5IJ2q6IRpH4",
  authDomain: "future-sights.firebaseapp.com",
  projectId: "future-sights",
  storageBucket: "future-sights.firebasestorage.app",
  messagingSenderId: "906030286213",
  appId: "1:906030286213:web:10b93bab2b7a808d18b0ec",
  measurementId: "G-5NYDF51QVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); 
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth, firestore};
// export const auth = getAuth(app);