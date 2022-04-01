import './App.css';
import React, { useState } from "react";

function App() {
  let [counter, changeCounter] = useState(5);

  return (
    <div className='App'>
      <div>Hello</div>
      <h1>{counter}</h1>
      <button onClick={() => changeCounter(counter + 1)}>Plus</button>
      <button onClick={() => changeCounter(counter - 1)}>Minus</button>
    </div>
  );
}

export default App;
