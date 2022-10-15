import React, {useState, useEffect} from 'react'
import './styles.css'

// firebase
import db from '../firebase';
import 'firebase/firestore';

export const Header = () => {

    // Account details
    const [username, setUsername] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [password, setPassword] = useState("");

    // Habit details
    const [habitTitle, setHabitTitle] = useState("");
    const [habitUserID, setHabitUserID] = useState("");
    const [habitBody, setHabitBody] = useState("");
    const [colorCode, setColorCode] = useState("");
    const [dayOfWeek, setDayOfWeek] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [complete, setComplete] = useState("");

    const [usersData, setUsersData] = useState([]);
    const [habitsData, setHabitsData] = useState([]);

    // Updated User
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
    const newUser = (e) => {
      e.preventDefault();
      db.collection("users").add({
        display_name: displayName,
        user_email: email,
        user_phone: phone,
        user_birthday: birthday,
        username: username,
        password: password
      });
      setDisplayName("");
      setUsername("");
      setPassword("");
      setPhone("");
      setBirthday("");
      setEmail("");
    };
  
    const newHabit = (e) => {
      e.preventDefault();
      db.collection("habits").add({
        habit_title: habitTitle,
        user_id: habitUserID,
        habit_body: habitBody,
        color_code: colorCode,
        day_of_week: dayOfWeek,
        start_time: startTime,
        end_time: endTime,
        is_complete: complete
      });
    
      setHabitTitle("");
      setHabitUserID("");
      setHabitBody("");
      setColorCode("");
      setDayOfWeek("");
      setStartTime("");
      setEndTime("");
      setComplete(false);

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
        <div style={{backgroundColor:'DarkSeaGreen'}}>
            <div id='resultField'></div>
            {!dataIdToBeUpdated ? (
                <div className='App__form'>
                  <h1>Create Account</h1>
                    <input
                    type="text"
                    placeholder="Full Name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="User Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="Birthday"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={newUser}>New User</button>
                <h1>Create Habit</h1>
                <input
                    type="text"
                    placeholder="Habit"
                    value={habitTitle}
                    onChange={(f) => setHabitTitle(f.target.value)}
                />
                <input
                    type="text"
                    placeholder="User ID"
                    value={habitUserID}
                    onChange={(f) => setHabitUserID(f.target.value)}
                />
                <input
                    type="text"
                    placeholder="Habit Description"
                    value={habitBody}
                    onChange={(f) => setHabitBody(f.target.value)}
                />
                <label for="color">Select your favorite color:</label>
                <input
                    id="color"
                    type="color"
                    placeholder="Color"
                    value={colorCode}
                    onChange={(f) => setColorCode(f.target.value)}
                />
                <input
                    type="number"
                    placeholder="Day of Week (1-7)"
                    value={dayOfWeek}
                    onChange={(f) => setDayOfWeek(f.target.value)}
                />
                <input
                    type="number"
                    placeholder="Start Time"
                    value={startTime}
                    onChange={(f) => setStartTime(f.target.value)}
                />
                <input
                    type="number"
                    placeholder="End Time"
                    value={endTime}
                    onChange={(f) => setEndTime(f.target.value)}
                />
                <label for="complete">Is It Complete?</label>
                <input
                    id="complete"
                    type="checkbox"
                    value={complete}
                    onChange={(f) => setComplete(f.target.value)}
                />
                <button onClick={newHabit}>New Habit</button>
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