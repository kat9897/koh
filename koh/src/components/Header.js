import React from 'react'
import { getAllUsers, getUser, addNewUser, addHabit, getAllHabits, getHabit } from "../firebase"; 
import './styles.css'

async function teest (userID) {
    await getUser(userID).then(function(result){
      document.getElementById('resultField').innerHTML = result['display_name']
    }) 
}

export const Header = () => {
    return (
        <div style={{backgroundColor:'DarkSeaGreen'}}>
            <h4>Check a User</h4>
            <input type="text" id='userIDinput'></input>
            <div className="btn">
                <button type="button" onClick={(e) => teest(document.getElementById('userIDinput').value)} >Get a User</button>
            </div>
            <div id='resultField'></div>
        </div>
    );
}