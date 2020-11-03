import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [temp, setTemp] = useState('')
  const [name, setName] = useState('');

  function reverse(e) {
    let reversed = []
    for (let i = name.length - 1; i >= 0; i--) {
      reversed.push(name[i])
    }
    setTemp(name)
    setName(reversed.join(''))
  }

  function undoRedo(e) {
    let data = temp
    setTemp(name)
    setName(data)
  }
  
  function changeName(e) {
    setTemp(name)
    setName(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <input className="mb-5" value={name} onChange={changeName}></input>
        <h2 className="mb-5">Output: {name}</h2>
        <div>
          <button onClick={reverse}>Reverse</button>
          <button onClick={undoRedo}>Undo/Redo</button>
        </div>
      </header>
    </div>
  );
}

export default App;
