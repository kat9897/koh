import React from 'react'
import { getAllUsers, getUser, addNewUser, addHabit, getAllHabits, getHabit } from "../firebase"; 

async function teest (userID) {
    await getUser(userID).then(function(result){
      document.getElementById('resultPLES').innerHTML = result['display_name']
    }) 
}

export const Webpage = () => {
    return (
        <div style={{backgroundColor:'green'}}>
            <h4 style={{color: 'white'}}>Check a User</h4>
            <input type="text" id='userIDinput'></input>
            <div className="btn">
                <button type="button" onClick={(e) => teest(document.getElementById('userIDinput').value)} >Get a User</button>
            </div>
            <div id='resultPLES'></div>
        </div>
    );
}