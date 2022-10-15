import './App.css';
import firebase from 'firebase/compat/app';
import { db } from './index';
import { getDatabase, ref, onValue} from "firebase/database";

import React, {useState} from 'react';

function App() {

  const [users, setUsers] = useState([]);
  const usersfb = ref(db, 'users/');

  onValue(usersfb, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });

  const firebaseApp = firebase.apps[0];
  return (
    <div>
      <h1>React & Firebase</h1>
      <h2>By @farazamiruddin</h2>
      <code>
        <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
      </code>
    </div>
  );
}

export default App;
