
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function writeNewUser(email, phone, birthday, display, username, password) {
    try{
     const userRef = await addDoc(collection(db, "users"), {
        'user_email': email,
        'user_phone': phone,
        'user_birthday': birthday,
        'display_name': display,
        'username': username,
        'password': password,
        'habits': []
     });
     console.log("Document written with ID: ", userRef.id);
    } catch (e) {
     console.error("Error adding document: ", e);
    } 
}

async function addHabit(userId, title, body, color_code, day, start, end, in_progress) {
    try{
        const habitRef = await addDoc(collection(db, "habits"), {
           'user_Id': userId,
           'habit_body': body,
           'habit_title': title,
           'color_code': color_code,
           'day_of_week': day,
           'start_time': start,
           'end_time': end,
           'in_progress': in_progress
        });
        console.log("Document written with ID: ", habitRef.id);
       } catch (e) {
        console.error("Error adding document: ", e);
       } 
}



export { writeNewUser, addHabit };