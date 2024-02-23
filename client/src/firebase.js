// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-47d28.firebaseapp.com",
  projectId: "mern-blog-47d28",
  storageBucket: "mern-blog-47d28.appspot.com",
  messagingSenderId: "663636575988",
  appId: "1:663636575988:web:e83fc5a5bd92dead10c0a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);