import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "jinder-c1880.appspot.com",
  messagingSenderId: "35126126754",
  appId: "1:35126126754:web:dec665563e9aa3f83b4ffb",
  measurementId: "G-ZQ1WZHYXN8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
