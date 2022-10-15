import React, {useState} from 'react';

import {getUser, getAllUsers, writeUserData, addHabit} from './firebase';



function App() {

  //const [users, setUsers] = useState([]);
  const [habits, setHabits] = useState([]);
  const [t, sett] = useState();

  const [users, setUsers] = useState(getAllUsers());

  const test = () => {
    console.log(users);
    writeUserData(1, "griffin@mail.com", 1234567890, "10/12/2001", "Griffin St-Maurice", "griffin", "griffin")
    writeUserData(2, "katrina@mail.com", 9059049526, "09/19/2001", "Katrina Best", "kat9897", "kat's password")
    addHabit(1, 11, "Work on KOH frontend", "Develop the front end and make it presentable given the 36hrs.", "#FF3409", "Friday", 2200, 2359, "imp")
  }
  
  return (
    <div>
      <div>
        {/* {users && users.map((user, index) => (
          <p>{user.display_name}</p>
        ))} */}
      </div>
      <button onClick={test}>
        test
      </button>
    </div>
  );
}




export default App;
