import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    setCounter((prevValue) => prevValue + 1);
    setCounter((prevValue) => prevValue + 1);
    setCounter((prevValue) => prevValue + 1);
  };

  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
  };

  return (
    <>
      <h1>My first App</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add Value{counter}</button>
      <button onClick={removeValue}>Remove Value{counter}</button>
      <p>All rights reserved</p>
    </>
  );
}

export default App;
