
import React, {useState} from 'react';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCkjLgGLMPTAqQPDM0cBYCCg4yJSBoiD2E",
  authDomain: "koh-firebase-d7492.firebaseapp.com",
  projectId: "koh-firebase-d7492",
  storageBucket: "koh-firebase-d7492.appspot.com",
  messagingSenderId: "470225001028",
  appId: "1:470225001028:web:23d41e3a9f5fae29c07a11",
  measurementId: "G-V24V7DPFLX"
};

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
     'password': password
  });
  console.log("Document written with ID: ", userRef.id);
 } catch (e) {
  console.error("Error adding document: ", e);
}
  
}


function App() {
  writeNewUser("griffin@mail.com", 1234567890, "10/12/2001", "Griffin St-Maurice", "griffin", "griffin's password")
  return (
    <div>
      <div>
        {/* {users && users.map((user, index) => (
          <p>{user.display_name}</p>
        ))} */}
      </div>
      {/* <button onClick={test}>
        test
      </button> */}
    </div>
  );
}




export default App;
