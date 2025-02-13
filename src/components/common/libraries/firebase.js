import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyD0trkh8Ovh4L2uhUilxsFmNi8TBipKJ2Q",
  authDomain: "dudo-97439.firebaseapp.com",
  projectId: "dudo-97439",
  storageBucket: "dudo-97439.firebasestorage.app",
  messagingSenderId: "813978662562",
  appId: "1:813978662562:web:9d0fd70c747fd1b00a49fb"
};

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_API_KEY,
//   authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_APP_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_APP_ID
// };

console.log("config", firebaseConfig);

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const firebaseApp = app;