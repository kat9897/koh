
import React, {useState} from 'react';
import { getAllUsers, getUser, addNewUser, addHabit, getAllHabits, getHabit } from "./firebase"; 
import DateRow from './components/DateRow';

async function teest (userID) {
  await getUser(userID).then(function(result){
    document.getElementById('resultPLES').innerHTML = result['display_name']
  }) 
}

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
      <div>
        <div style={{backgroundColor:'green'}}>
            <h4 style={{color: 'white'}}>Check a User</h4>
            <input type="text" id='userIDinput'></input>
            <div className="btn">
                <button type="button" onClick={(e) => teest(document.getElementById('userIDinput').value)} >Get a User</button>
            </div>
            <div id='resultPLES'></div>
        </div>
      </div>

      <div className='dateDisplayShell'>
        <DateRow date='25' checks={[true, false, true]} highlight='I learned React!' dailyLog='A description of my day.'/>
      </div>
    </div>
  );
}

export default App;