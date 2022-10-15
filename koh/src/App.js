import React, {useState, useEffect} from 'react';
import DateRow from './components/DateRow';

import { Webpage } from "./components/Webpage"
import './App.css'
// firebase
import db from './firebase';
import { getAllUsers, getUser, addNewUser, addHabit, getAllHabits, getHabit } from "./firebase"; 
import {doc, getDoc} from 'firebase/firestore';

function App() {

  const [user, setUser] = useState("");
  const [habit, setHabit] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [habitsData, setHabitsData] = useState([]);
  const [updatedUser, setUpdatedUser] = useState("");
  const [updatedHabit, setUpdatedHabit] = useState("");
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");

  // Read from users
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setUsersData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  // Read from Habits
  useEffect(() => {
    db.collection("habits").onSnapshot((snapshot) => {
      setHabitsData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  // Add to database
  const submit = (e) => {
    e.preventDefault();
    db.collection("users").add({
      display_name: user
    });
    db.collection("habits").add({
      habit_title: habit
    });
  
    setUser("");
    setHabit("");
  };

  // Update user
  const updateUser = (e) => {
    e.preventDefault();
    db.collection("users").doc(dataIdToBeUpdated).update({
      display_name: updatedUser
    });
  
    setUpdatedUser("");
    setDataIdToBeUpdated("");
  };

  // Update Habit
  const updateHabit = (e) => {
    e.preventDefault();
    db.collection("habits").doc(dataIdToBeUpdated).update({
      habit_title: updatedHabit
    });
  
    setUpdatedHabit("");
    setDataIdToBeUpdated("");
  };

  return (
    <div className='App'>
        {!dataIdToBeUpdated ? (
        <div className='App__form'>
            <input
            type="text"
            placeholder="User"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          {/* <input
            type="text"
            placeholder="User Phone"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="text"
            placeholder="Birthday"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          /> */}
          <input
            type="text"
            placeholder="Habit"
            value={habit}
            onChange={(f) => setHabit(f.target.value)}
          />
          <button onClick={submit}>Submit</button>
        </div>
        ) : (
          <div className="App__Updateform">
          <input
            type="text"
            placeholder="User"
            value={updatedUser}
            onChange={(e) => setUpdatedUser(e.target.value)}
          />
          <button onClick={updateUser}>Update</button>
          <input
            type="text"
            placeholder="Habit"
            value={updatedHabit}
            onChange={(e) => setUpdatedHabit(e.target.value)}
          />
          <button onClick={updateHabit}>Update</button>
        </div>
        )}

        <div className="App__DataDisplay">
          <table>
            <tbody>
            <tr>
              <th>User</th>
            </tr>
            {usersData?.map(({ id, data }) => (
              <tr key={id}>
                <td>{data.display_name}</td>
                <td>
                  <button
                    onClick={() => {
                      setDataIdToBeUpdated(id);
                      setUpdatedUser(data.display_name);
                    }}
                  >
                    Update
                  </button></td>
              </tr>
            ))}
            <tr>
              <th>Habit</th>
            </tr>
            {habitsData?.map(({ id, data }) => (
              <tr key={id}>
                <td>{data.habit_title}</td>
                <td>
                  <button
                    onClick={() => {
                      setDataIdToBeUpdated(id);
                      setUpdatedHabit(data.habit_title);
                    }}
                  >
                    Update
                  </button></td>
              </tr>
            ))}
            </tbody>
          </table>
      </div>
    </div>
  );
}

export default App;