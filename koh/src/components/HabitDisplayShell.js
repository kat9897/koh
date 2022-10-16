import React from 'react'
//import { HabitDisplay } from './HabitDisplay'

const HabitDisplayShell = () => {
    let habitNames = ["Go outside", "talk to one person", "10 push ups"];
    //let habitDescriptions = [];
    
    return (
        <div className="habitDisplayShell">
            <div className="filler"></div>
            <div className="habits">
                { habitNames.map((habitName) => ( 
                    <div className='habitName'> {habitName} </div>
                )) }
            </div>
            <div className="filler">
                <button className='addHabit'>+</button>
            </div>
        </div>
    );
}

export default HabitDisplayShell;