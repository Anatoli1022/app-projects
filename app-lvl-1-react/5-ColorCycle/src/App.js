import React from 'react';
import { useState } from 'react';
import './App.scss';

function App() {
  const [color, setColor] = useState('');
  const [firstColor, setFirstColor] = useState('');
  const [secondColor, setSecondColor] = useState('');

  const tim = () => {
    setColor(firstColor);
  };

  const timer = () => {
    setColor(secondColor);
  };

  const style = {
    backgroundColor: color,
  };
  return (
    <div style={style} className="App">
      <div>
        <input
          placeholder="color"
          type="text"
          onChange={(e) => setFirstColor(e.target.value)}
        />
        <button onClick={tim}>first Color</button>
      </div>
      <div>
        <input
          placeholder="color"
          type="text"
          onChange={(e) => setSecondColor(e.target.value)}
        />
        <button onClick={timer}> second Color</button>
      </div>
    </div>
  );
}

export default App;

// onChange={(e) => setOne(e.target.value)}
