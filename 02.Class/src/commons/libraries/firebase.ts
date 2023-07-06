// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTdgTzGEoMaVTgvMne0DVx-tot6mSR2io",
    authDomain: "front-by-jun.firebaseapp.com",
    projectId: "front-by-jun",
    storageBucket: "front-by-jun.appspot.com",
    messagingSenderId: "77647450891",
    appId: "1:77647450891:web:e7e6adfeed27235f07880e"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);