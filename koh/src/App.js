import React, {useState} from 'react';
import { getAllUsers, getUser, addNewUser, addHabit, getAllHabits, getHabit } from "./firebase"; 
import DateRow from './components/DateRow';
import { Webpage } from "./components/Webpage"

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
    <Webpage></Webpage>
  );
}

export default App;