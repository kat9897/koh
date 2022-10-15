import React, {useState} from 'react';

import {getUser, writeUserData, addHabit} from './firebase';



function App() {

  const [users, setUsers] = useState([]);
  const [habits, setHabits] = useState([]);
  // const usersfb = ref(db, 'users/');

  getUser(1);
  getUser(2);

  // const dbRef = ref(db);
  // get(child(dbRef, `users/`)).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });

  // Get users
  // useEffect(() => {
  //   const query = ref(db, "users");
  //   onValue(query, (snapshot) => {
  //     setUsers(snapshot.val());

  //     return () => query.off();
        
  //   });
  // }, []);

  // Get habits
  // useEffect(() => {
  //   const query = ref(db, "habits");
  //   onValue(query, (snapshot) => {
  //     setHabits(snapshot.val());

  //     return () => query.off();
        
  //   });
  // }, []);

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

  // if (!users) return <div>No users</div>;

  // const firebaseApp = db.apps[0];
  const test = () => {
    writeUserData(1, "griffin@mail.com", 1234567890, "10/12/2001", "Griffin St-Maurice", "griffin", "griffin")
    writeUserData(2, "katerina@mail.com", 9059049526, "09/19/2001", "Katerina Best", "kat9877", "kat's password")
    addHabit(1, 11, "Work on KOH frontend", "Develop the front end and make it presentable given the 36hrs.", "#FF3409", "Friday", 2200, 2359, "imp")
  }
  
  return (
    <div>
      {/* <h1>React & Firebase</h1>
      <h2>By @farazamiruddin</h2>
      <code>
        <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
      </code> */}
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
