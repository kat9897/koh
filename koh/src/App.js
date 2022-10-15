
import React, {useState} from 'react';
import  { writeNewUser, addHabit } from './firebase'




function App() {
  addHabit("0QHvKhD6XzfdrdcNssq3","Finish KOH Hackathon Project", "Get the project to a presentable state. Finish backend functions and frontend entry/buttons", "#FF3409", 5, 2200, 2359, true)
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
