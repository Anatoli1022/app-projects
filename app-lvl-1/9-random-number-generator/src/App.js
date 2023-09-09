import { useState } from 'react';
import './App.scss';

function App() {
  const [num, setNum] = useState();
  const [maxNum, setMaxNum] = useState();
  const [minNum, setMinNum] = useState();

  function randomNumberInRange(min, max) {
    setNum(Math.floor(Math.random() * (max - min + 1) + min));
  }

  const handleClick = () => {
    randomNumberInRange(minNum, maxNum);
  };


  return (
    <div className="App">
      {maxNum > minNum ? (
        <h1>number is : {num}</h1>
      ) : (
        <h1>the maximum number cannot be less than the minimum</h1>
      )}
      <input
        value={maxNum}
        type="number"
        onChange={(e) => setMaxNum(Number(e.target.value))}
        placeholder="max number"
      />
      <input
        value={minNum}
        type="number"
        onChange={(e) => setMinNum(Number(e.target.value))}
        placeholder="min number"
      />
      <button onClick={handleClick}> click!!!!</button>
    </div>
  );
}

export default App;
