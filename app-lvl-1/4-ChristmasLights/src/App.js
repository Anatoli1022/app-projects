import React, { useState } from 'react';
import Circle from './components/Circle';
import './App.scss';

const ChristmasLights = () => {
  const colors = [
    '#c0392b',
    '#f1c40f',
    '#74f7e1',
    '#2ecc71',
    '#c0392b',
    '#f1c40f',
    '#74f7e1',
    '#2ecc71',
  ];

  const [time, setTime] = useState(' ');

  const stop = () => setTime('0s');
  const start = () => setTime('5s');

  return (
    <div className="App">
      {colors.map((color, index) => (
        <Circle key={index} color={color} time={time} />
      ))}
      <input
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="lights speed"
      />
      <button onClick={stop}>off</button>
      <button onClick={start}>on</button>
    </div>
  );
};

export default ChristmasLights;
