import React from 'react'
//import { HabitDisplay } from './HabitDisplay'

const HabitDisplayShell = () => {
    let habitNames = ["Go outside", "talk to 1 person", "10 push ups"];
    //let habitDescriptions = [];
    
    return (
        <div className="habitDisplayShell">
            <div className="filler"></div>
            { habitNames.map((habitName) => ( 
                <div className='habitName'> {habitName} </div>
            )) }
            <div className="addHabitContainer">
                <button className='addHabit'>+</button>
            </div>
        </div>
    );
}

export default HabitDisplayShell;