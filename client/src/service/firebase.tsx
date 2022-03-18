// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_ogh_XCwhW48X0jAMAo64PIZFUDilZG0",
  authDomain: "jinder-c1880.firebaseapp.com",
  projectId: "jinder-c1880",
  storageBucket: "jinder-c1880.appspot.com",
  messagingSenderId: "35126126754",
  appId: "1:35126126754:web:dec665563e9aa3f83b4ffb",
  measurementId: "G-ZQ1WZHYXN8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
