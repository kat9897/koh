
import './App.css';

//firebase stuff
import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


function App() {
  const firebaseApp = firebase.apps[0];
  
  return (
    <div>
      <h1>React & Firebase</h1>
      <code>
        <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
      </code>
    </div>
  );
}




export default App;
