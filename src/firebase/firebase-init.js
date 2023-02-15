// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6mrtyUUaTrFziPOaKVNe7Gfh9q-2a3Gk",
  authDomain: "larnelle-art.firebaseapp.com",
  projectId: "larnelle-art",
  storageBucket: "larnelle-art.appspot.com",
  messagingSenderId: "141400249989",
  appId: "1:141400249989:web:a3cdf642187aa536a3fbec",
  measurementId: "G-T4F5609NG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage}