import React, {useEffect, useState} from 'react';

//firebase stuff
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase, ref, set, onValue } from "firebase/database";

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
    habits: [11, 12]
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

}


function App() {

  const [users, setUsers] = useState([]);
  // const usersfb = ref(db, 'users/');

  // Get users
  useEffect(() => {
    const db = getDatabase();
    const query = ref(db, "users");
    onValue(query, (snapshot) => {
      setUsers(snapshot.val());

      return () => query.off();
        
    });
  }, []);

  // Get habits
  useEffect(() => {
    const db = getDatabase();
    const query = ref(db, "habits");
    onValue(query, (snapshot) => {
      setUsers(snapshot.val());

      return () => query.off();
        
    });
  }, []);

  // const readAllUsers = async () => {
  //   const usersfb = ref(db, 'users/');
  //   await onValue(usersfb, (snapshot) => {
  //     return snapshot.val(); 
  //   });
  // }
  
  // const readUser = async (userId) => {
  //   const usersfb = ref(db, 'users/' + userId);
  //   await onValue(usersfb, (snapshot) => {
  //     return snapshot.val();
  //   });
  // }

  // readUser().then(
  //   function(value) {console.log(value);}
  // );

  // onValue(usersfb, (snapshot) => {
  //   const data = snapshot.val();
  //   //console.log(data["1"]["display_name"]);
  // });

  if (!users) return <div>No users</div>;

  const firebaseApp = firebase.apps[0];
  const test = () => {
    writeUserData(1, "griffin@mail.com", 1234567890, "10/12/2001", "Griffin St-Maurice", "griffin", "griffin")
    writeUserData(2, "katerina@mail.com", 9059049526, "09/19/2001", "Katerina Best", "kat9877", "kat's password")
    addHabit(1, 11, "Work on KOH frontend", "Develop the front end and make it presentable given the 36hrs.", "#FF3409", "Friday", 2200, 2359, "imp")
  }
  
  return (
    <div>
      <h1>React & Firebase</h1>
      <h2>By @farazamiruddin</h2>
      <code>
        <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
      </code>
      <div>
        {users && users.map((user, index) => (
          <p>{user.display_name}</p>
        ))}
      </div>
      <button onClick={test}>
        test
      </button>
    </div>
  );
}




export default App;
