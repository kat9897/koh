import React from 'react'
import firebase, { getAllHabits } from '../firebase'
//import { HabitDisplay } from './HabitDisplay'

const HabitDisplayShell = () => {
    let habitNames = ["CSCC73", "CSCC73", "CSCC85", "CSCD58", "Go outside", "Talk to 1 person", "10 pushups", "Clean room", "Play guitar", "Read book"];

    // const habits = getAllHabits();

    // habits.map(habit => {
	//     console.log(habit);
    // });
    
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