// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRX3aMN4iiPM5PuSClrvUyHKOrIkyUJ9M",
  authDomain: "coffee-store-app-a5228.firebaseapp.com",
  projectId: "coffee-store-app-a5228",
  storageBucket: "coffee-store-app-a5228.firebasestorage.app",
  messagingSenderId: "251737614560",
  appId: "1:251737614560:web:7ab45dfb9e4aaf5f0ac885",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
