// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0LlyATME2cCzgF3kcGNiN0-73telPeSU",
  authDomain: "project-4467616497107550207.firebaseapp.com",
  projectId: "project-4467616497107550207",
  storageBucket: "project-4467616497107550207.firebasestorage.app",
  messagingSenderId: "541971383079",
  appId: "1:541971383079:web:fd4bb0a0dfa35b45071f02",
  measurementId: "G-2V8YEX595P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
