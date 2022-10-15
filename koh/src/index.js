import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase } from "firebase/database";

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
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
