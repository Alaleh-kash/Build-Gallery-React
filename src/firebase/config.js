import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP7kBAmahcEtfzw__7GN_kl9N1mExx1us",
  authDomain: "kids-first-9da30.firebaseapp.com",
  projectId: "kids-first-9da30",
  storageBucket: "kids-first-9da30.appspot.com",
  messagingSenderId: "280726615422",
  appId: "1:280726615422:web:edfcad57e3bd699cca2f2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore 
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

export {db, storage}