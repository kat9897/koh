import React, {Text, useEffect, useState} from 'react'
import DateRow from './DateRow'
import db from '../firebase';
import { onSnapshot, query, collection, getDocs } from 'firebase/firestore';

const DateDisplayShell = ({ date }) => {  
    const [habitsCompleted, setHabitsCompleted] = useState([]);
    const [habitCompleteDays, setHabitCompleteDays] = useState([]);
    const [daysData, setDaysData] = useState([]);
    let [count, setCount] = useState(0);

    // Read habits Completed
    const readHabits = async () => {
      try {
        const habits = [];
        //const habitCompDay = [];
        //const readHabitQuery = query(collection(db, "habits"));
        //const querySnapshot = await getDocs(readHabitQuery);
        var ss = await db.collection("habits").get();
        ss.forEach((habit) => {
          // console.log("each habit");
          // console.log("Split string: ",habit.completed.split(""));
          // habit.completed.split("").forEach((habComp) => {
          //   habitCompDay.push(habComp);
          // })
          // setHabitCompleteDays([...habitCompDay]);
          habits.push(habit.data().completed);
          //console.log(habitCompDay);
        })
        setHabitsCompleted([...habits]);
        //console.log("habits completed",habitsCompleted);
        //console.log("Clicked Read Is Complete!");
        //console.log(habits); 
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

    const habitsParsing = () => {
      habitsCompleted.forEach((habit) => {
        //const split = habit.split("");
        habitCompleteDays.push(habit.split("").map(char => (char === '1')));
      })

      console.log(habitCompleteDays);
    }

    // Read days
    const readDays = async () => {
      try {
        const days = [];
        var ss = await db.collection("days").get();

        ss.forEach((day) => {
          days.push(day.data());
        })
        setDaysData([...days]);
        // console.log("Clicked Days!");
        // console.log(days);
        
      } catch (e) {
        alert("error");
      }
    }

    useEffect(() => {
      readHabits();
      readDays();
      habitsParsing();
      // console.log("Count at beginning: ", count);

      // daysData.forEach((day) => {

      //   console.log("First habit checklist", habitsCompleted[count]);
      //   console.log("Count: ", count);
      //   setCount(count+1);
      // })
    }, [])
    
    return (
        <>
            {daysData.map((day) => (
              <DateRow date={day.date} checks={[true, true, false, true, false, false, true]} highlight={day.highlight} dailyLog={day.daily_log}/>
            ))}
            {/* <DateRow date={16} checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/>            
            <DateRow date={15} checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/>
            <DateRow date={14} checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/>
            <DateRow date={13} checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/>
            <DateRow date={12} checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/>
            <DateRow date={11} checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/>
            <DateRow date={10} checks={[true, true, false, true, false, false, true]} highlight="Highlight" dailyLog="Description of my day"/> */}
        </>
    )
}

export default DateDisplayShell;