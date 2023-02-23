import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2QZFI1mMNYXSVsBB7iliO4_7n8RnezWQ",
  authDomain: "my-events-431aa.firebaseapp.com",
  projectId: "my-events-431aa",
  storageBucket: "my-events-431aa.appspot.com",
  messagingSenderId: "617828553570",
  appId: "1:617828553570:web:0b15243b879dc28130d23b",
  measurementId: "G-4G6KBB4PTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const database = getFirestore(app);