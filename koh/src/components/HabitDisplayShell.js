import React, {useState, useEffect} from 'react'
import firebase, { getAllHabits } from '../firebase'
//import { HabitDisplay } from './HabitDisplay'
import db from '../firebase';


const HabitDisplayShell = () => {
    const [habitId, setHabitId] = useState([]);
    const [habitData, setHabitData] = useState([]);
    // const habits = getAllHabits();

    // habits.map(habit => {
	//     console.log(habit);
    // });

    // Read habits
    const readHabits = async () => {
        try {
          const habits = [];
          const habitIds = [];
          //const readHabitQuery = query(collection(db, "habits"));
          //const querySnapshot = await getDocs(readHabitQuery);
          var ss = await db.collection("habits").get();
          ss.forEach((habit) => {
            habits.push(habit.data());
            habitIds.push(habit.id);
          })
          //console.log("Clicked Habits!");
          setHabitId([...habitIds]);
          setHabitData([...habits]);
        //   console.log(habits);
        //   console.log(habitIds);
          // snapshotHabits = onSnapshot(readHabitQuery, (habits) => {
          //   const habitsA = [];
          //   habits.forEach((habit) => {
          //     habitsA.push(habit.data().habit_title);
          //   });
          //   console.log("Current habits: ", habitsA.join(", "));
          // })
        } catch (e) {
          alert("error");
        }
      }

      useEffect(() => {
        readHabits();
      }, [])
    
    return (
        <div className="habitDisplayShell">
            <div className="filler"></div>
            { habitData.map((habit) => ( 
                <div className='habitName'> {habit.habit_title} </div>
            )) }
            <div className="addHabitContainer">
                <button className='addHabit'>+</button>
            </div>
        </div>
    );
}

export default HabitDisplayShell;