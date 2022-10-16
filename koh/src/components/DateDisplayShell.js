import React, {Text, useEffect, useState} from 'react'
import DateRow from './DateRow'
import db from '../firebase';

class Habit {
  constructor (habit_id, habit_title, habit_body, color_code, start_time, end_time, is_complete) {
      this.habit_id = habit_id;
      this.habit_title = habit_title;
      this.habit_body = habit_body;
      this.color_code = color_code;
      this.start_time = start_time;
      this.end_time = end_time;
      this.is_complete = is_complete;
  }
  toString() {
      return this.habit_title;
  }
}

// Firestore data converter
const habitConverter = {
  toFirestore: (habit) => {
      return {
          habit_id: habit.habit_id,
          habit_title: habit.habit_title,
          habit_body: habit.habit_body,
          color_code: habit.color_code,
          start_time: habit.start_time,
          end_time: habit.end_time,
          is_complete: habit.is_complete
          };
  },
  fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return new Habit(data.id, data.habit_title, data.habit_body, data.color_code, data.start_time, data.end_time, data.is_complete);
  }
};

export const DateDisplayShell = () => {  
    const [habitsData, setHabitsData] = useState([]);

    // Read from Habits
    useEffect(async () => {
        await db.collection("habits").onSnapshot(async (snapshot) => {
          setHabitsData(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
        habitsData.data.map((habit) => {
            console.log(habit);
        });
        console.log(habitsData);
    }, []);
    return (
        <>
            <DateRow date="1" checks={[true, true, false, true, false]} highlight="Highlight" dailyLog="Description of my day"/>
        </>
    )
}