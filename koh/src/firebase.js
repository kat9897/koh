import {initializeApp} from 'firebase/app';
import { getFirestore, collection, addDoc, query, getDocs, getDoc, doc } from "firebase/firestore";
import { ref, child, get, set } from "firebase/database";

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

// getUser

// param: 
//  userId: String
async function getUser(userId) {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
    console.log("User:", userSnap.data());
    } else {
    // doc.data() will be undefined in this case
    console.log("No such user! IMPOSTER!");
    }
}

// getAllUsers
async function getAllUsers() {
    const q = query(collection(db, "users"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    });
}

// writeNewUser

// param:
//  email: String
//  phone: int
//  birthday: String
//  display: String
//  username: String
//  password: String
async function writeNewUser(email, phone, birthday, display, username, password) {
    try{
     const userRef = await addDoc(collection(db, "users"), {
        'user_email': email,
        'user_phone': phone,
        'user_birthday': birthday,
        'display_name': display,
        'username': username,
        'password': password
     });
       console.log("Document written with ID: ", userRef.id);
    } catch (e) {
       console.error("Error adding document: ", e);
     }
   }

export {getUser, getAllUsers, writeNewUser};