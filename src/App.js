import React from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchingStudentsList} from './actions'
import List from './components/List'
function App() {
  return (
    <div className="App">
      <h1> Class </h1>
      <p style={{color: "blue"}}> this is class room</p>
    </div>
  );
}

export default App;
