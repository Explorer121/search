// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFHLFV2_u_VfzY3791_KNQb2BuSOu2k9I",
  authDomain: "note-117e4.firebaseapp.com",
  projectId: "note-117e4",
  storageBucket: "note-117e4.appspot.com",
  messagingSenderId: "954674193258",
  appId: "1:954674193258:web:f235c618a792f781453b13",
  measurementId: "G-WCY0W15WCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);