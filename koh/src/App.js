
import React, {useState} from 'react';
import { getAllUsers, getUser, writeNewUser } from "./firebase"; 

function App() {
  getUser("0QHvKhD6XzfdrdcNssq3");
  // getAllUsers();
  // writeNewUser("griffin@mail.com", 1234567890, "10/12/2001", "Griffin St-Maurice", "griffin", "griffin's password")
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
