import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6IQrd9n46mHD1Zx32JDQn3Nq3AZcmKdQ",
  authDomain: "thedojosite-a56e3.firebaseapp.com",
  projectId: "thedojosite-a56e3",
  storageBucket: "thedojosite-a56e3.appspot.com",
  messagingSenderId: "355871491424",
  appId: "1:355871491424:web:f840086ca48ac80f2d8a05",
};

//init firbase

firebase.initializeApp(firebaseConfig);

// services

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
