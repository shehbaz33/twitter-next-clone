// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAr6RNtEQP5XdErHP7TK8mVwpBU6_TeQ90",
    authDomain: "twitter-clone-27458.firebaseapp.com",
    projectId: "twitter-clone-27458",
    storageBucket: "twitter-clone-27458.appspot.com",
    messagingSenderId: "237275325834",
    appId: "1:237275325834:web:a566eea9aa653f716e5473"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };