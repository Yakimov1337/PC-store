// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { FacebookAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp ({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN ,
  projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_API_PROJECT_APP_STORAGE_BUCKET ,
  messagingSenderId: process.env.REACT_APP_FIREBASE_PROJECT_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});

// Initialize Firebase
export const auth = app.auth();
export const facebookProvider = new FacebookAuthProvider();

export default app;
// Initialize FireStore
export const db = getFirestore(app);



