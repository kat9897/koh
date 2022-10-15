import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
import { ref, child, get, set } from "firebase/database";

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');


// firebase stuff n things
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
initializeApp();
const db = getFirestore();

// getUser

// param: 
//  userId: int
async function getUser(userId) {
await get(child(ref(db), `users/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
    console.log(snapshot.val());
    } else {
    console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});
}

// getAllUsers
async function getAllUsers() {
    await get(child(ref(db), `users`)).then((snapshot) => {
        return snapshot.val();
    }).catch((error) => {
        console.error(error);
    });
    }

function exists(snapshot) {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
}

// writeUserData

// param:
//  userId: int
//  email: String
//  phone: int
//  birthday: String
//  display: String
//  user_name: String
//  pass_word: String
function writeUserData(userId, email, phone, birthday, display, user_name, pass_word) {
set(ref(db, 'users/' + userId), {
    username: user_name,
    password: pass_word,
    user_email: email,
    user_phone: phone,
    user_birthday: birthday,
    display_name: display,
    user_id: userId,
    habits: [11, 12]
});
}

// getUser

// param: 
//  userId: int
//  habit_id: int
//  title: String
//  body: String
//  color: String
//  day: String
//  start: int
//  end: int
//  prog: String
function addHabit(userId, habit_id, title, body, color, day, start, end, prog ) {
set(ref(db, 'habits/' + habit_id), {
    user_id: userId,
    habit_id: habit_id,
    habit_title: title,
    habit_body: body,
    color_code: color,
    day_of_week: day,
    start_time: start,
    end_time: end,
    imp_or_comp: prog
});
}

export {getUser, getAllUsers, writeUserData, addHabit};