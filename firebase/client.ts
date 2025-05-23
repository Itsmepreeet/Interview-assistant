// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxRfD727RqVMLGM8n3YuhY5HCBbHYZYO8",
  authDomain: "preet-d0795.firebaseapp.com",
  projectId: "preet-d0795",
  storageBucket: "preet-d0795.firebasestorage.app",
  messagingSenderId: "802655257122",
  appId: "1:802655257122:web:eafc3db5c6fa85a2ff807b",
  measurementId: "G-FTQWE8R7BV"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
