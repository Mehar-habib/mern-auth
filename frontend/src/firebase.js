// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-a7cd3.firebaseapp.com",
  projectId: "mern-auth-a7cd3",
  storageBucket: "mern-auth-a7cd3.appspot.com",
  messagingSenderId: "993021194507",
  appId: "1:993021194507:web:b332c3f01d27874d92f20e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
