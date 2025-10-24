
import { getApp, initializeApp } from "firebase/app";
import {  getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCVihzeGd3wKRld6rTKKfZ74gREz6NAcIs",
  authDomain: "intervbot.firebaseapp.com",
  projectId: "intervbot",
  storageBucket: "intervbot.firebasestorage.app",
  messagingSenderId: "1033910262961",
  appId: "1:1033910262961:web:a19416110f8412cb055690",
  measurementId: "G-PDCXRNQWYZ"
};

const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
