// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6Z0qqhgRjSQUg1-yQ_ALq5mwLg20M1gw",
  authDomain: "mind-of-admin.firebaseapp.com",
  projectId: "mind-of-admin",
  storageBucket: "mind-of-admin.firebasestorage.app",
  messagingSenderId: "849998059247",
  appId: "1:849998059247:web:25084ec8b3d7f7f476ad1a",
  measurementId: "G-JBZNL4Q2TX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, db, storage }; 