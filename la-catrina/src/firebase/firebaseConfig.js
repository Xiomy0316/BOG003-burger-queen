import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiUMtiQC2yTZvV_EEO4FMkG4qEniAyez8",
  authDomain: "la-catrina-da086.firebaseapp.com",
  projectId: "la-catrina-da086",
  storageBucket: "la-catrina-da086.appspot.com",
  messagingSenderId: "459162347131",
  appId: "1:459162347131:web:427e220af208fa005364de"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;