
import React, {useState} from 'react';
import { getAllUsers, getUser, addNewUser, addHabit } from "./firebase"; 

function App() {
  // getUser("0QHvKhD6XzfdrdcNssq3");
  // getAllUsers();
  // addNewUser("griffin@mail.com", 1234567890, "10/12/2001", "Griffin St-Maurice", "griffin", "griffin's password")
  addHabit("X6vl69nbL5Vwq6JY0sFY", "Make UI", "Make it look perty", "#BC09FF", 6, 1031, 2359, true)
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
