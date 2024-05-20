import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyBlR-zYrci-BO19VoTZqVUWl5XUT-XG4LU",
    authDomain: "taskio-29638.firebaseapp.com",
    projectId: "taskio-29638",
    storageBucket: "taskio-29638.appspot.com",
    messagingSenderId: "463676238815",
    appId: "1:463676238815:web:a0bf13c954bd84be99b26a"
};

initializeApp(firebaseConfig);
export const auth = getAuth();