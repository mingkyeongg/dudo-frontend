// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0trkh8Ovh4L2uhUilxsFmNi8TBipKJ2Q",
  authDomain: "dudo-97439.firebaseapp.com",
  projectId: "dudo-97439",
  storageBucket: "dudo-97439.firebasestorage.app",
  messagingSenderId: "813978662562",
  appId: "1:813978662562:web:9d0fd70c747fd1b00a49fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
