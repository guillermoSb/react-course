// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
const firebaseConfig = {
	apiKey: "AIzaSyCDNbKXkbENhLgjiputfW3K241XqNALyL8",
	authDomain: "journal-app-6e23c.firebaseapp.com",
	projectId: "journal-app-6e23c",
	storageBucket: "journal-app-6e23c.appspot.com",
	messagingSenderId: "273960724868",
	appId: "1:273960724868:web:0a5eb2b8607398ff5d15d1"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)