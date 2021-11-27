// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp ({
  // apiKey: "AIzaSyBVBt0JTTo77nw_uZGITSI9lEyA4tD2vqk",
  // authDomain: "pc-store-85d68.firebaseapp.com",
  // projectId: "pc-store-85d68",
  // storageBucket: "pc-store-85d68.appspot.com",
  // messagingSenderId: "223345808053",
  // appId: "1:223345808053:web:787df7d8266d036d78e4fc"

  // apiKey: "AIzaSyBVBt0JTTo77nw_uZGITSI9lEyA4tD2vqk",
  // authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN ,
  // projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_API_PROJECT_APP_STORAGE_BUCKET ,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_PROJECT_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID

  apiKey: "AIzaSyBcuKbBPyPlCKnNtQUgpxwktcsKNMA6Nyc",
  authDomain: "mystore-f7ec1.firebaseapp.com",
  projectId: "mystore-f7ec1",
  storageBucket: "mystore-f7ec1.appspot.com",
  messagingSenderId: "147722806172",
  appId: "1:147722806172:web:689691024badf4a27ede59"
});

// Initialize Firebase
export const auth = app.auth();
export default app;

// Initialize FireStore
export const db = getFirestore(app);



