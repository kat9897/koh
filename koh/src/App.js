
import React, {useState} from 'react';

import {getUser, getAllUsers, writeUserData, addHabit} from './firebase';




function App() {


  
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
