import React, {useState} from 'react';
import { getAllUsers, getUser, addNewUser, addHabit, getAllHabits, getHabit } from "./firebase"; 
import { Webpage } from "./components/Webpage"

function App() {
  // getUser("0QHvKhD6XzfdrdcNssq3");
  // getAllUsers();
  // addNewUser("griffin@mail.com", 1234567890, "10/12/2001", "Griffin St-Maurice", "griffin", "griffin's password")
  
  return (
    <div>
      <div>
        {/* {users && users.map((user, index) => (
          <p>{user.display_name}</p>
        ))} */}
      </div>
      <Webpage></Webpage>
    </div>
  );
}

export default App;