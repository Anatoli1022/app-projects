import React, { useState } from 'react';

import './App.css';

function App() {
  const [counter, setCounter] = useState<number>(0);
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1); 
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1); 
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
