// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAl6cyto8UOToyuynn4Ke-wB3tRd36DezM",
  authDomain: "currency-converter-app-4644f.firebaseapp.com",
  projectId: "currency-converter-app-4644f",
  storageBucket: "currency-converter-app-4644f.appspot.com",
  messagingSenderId: "1057758391737",
  appId: "1:1057758391737:web:76ab114f908e33ab67da68",
  measurementId: "G-RYVNQBGWWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);