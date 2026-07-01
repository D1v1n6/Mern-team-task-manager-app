// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: "team-task-manager-f3d97.firebaseapp.com",
  projectId: "team-task-manager-f3d97",
  storageBucket: "team-task-manager-f3d97.firebasestorage.app",
  messagingSenderId: "320155232093",
  appId: "1:320155232093:web:9e3470bc48256fe6302ab4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);