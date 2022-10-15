import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getDatabase } from "firebase/database";

// firebase stuffnthings
const firebaseConfig = {
  apiKey: "AIzaSyCkjLgGLMPTAqQPDM0cBYCCg4yJSBoiD2E",
  authDomain: "koh-firebase-d7492.firebaseapp.com",
  projectId: "koh-firebase-d7492",
  storageBucket: "koh-firebase-d7492.appspot.com",
  messagingSenderId: "470225001028",
  appId: "1:470225001028:web:23d41e3a9f5fae29c07a11",
  measurementId: "G-V24V7DPFLX"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = getDatabase(firebaseApp);
const auth = firebase.auth();

export { auth, db };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
