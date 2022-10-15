import './App.css';
import firebase from 'firebase/compat/app';

import React from 'react';

//firebase stuff
import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase, ref, set, child, push, update, get, onValue } from "firebase/database";

function writeUserData(userId, email, phone, birthday, display, user_name, pass_word) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: user_name,
    password: pass_word,
    user_email: email,
    user_phone: phone,
    user_birthday: birthday,
    display_name: display,
    user_id: userId,
    habits: [11,12]
  });
}




function addHabit(userId, habit_id, title, body, color, day, start, end, prog ) {
  const db = getDatabase();
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
  //Pull all habits from userId
  //const habitRef = ref(db, 'users/' + userId + '/habits')
  
  //append habit_id to array

  //update '\users' + userId + '/habits' with new array
}


function App() {
  const firebaseApp = firebase.apps[0];
  writeUserData(1, "griffin@mail.com", 1234567890, "10/12/2001", "Griffin St-Maurice", "griffin", "griffin")
  writeUserData(2, "katerina@mail.com", 9059049526, "09/19/2001", "Katerina Best", "kat9877", "kat's password")
  addHabit(1, 11, "Work on KOH frontend", "Develop the front end and make it presentable given the 36hrs.", "#FF3409", "Friday", 2200, 2359, "imp")
  

  
  return (
    <div>
      <h1>React & Firebase</h1>
      <h2>By @farazamiruddin</h2>
      <code>
        <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
      </code>
    </div>
  );
}




export default App;
