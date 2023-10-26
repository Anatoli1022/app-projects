import { useState } from 'react';
import './App.scss';

function App() {
  const [one, setOne] = useState('');
  const [two, setTwo] = useState('');
  const [three, setThree] = useState('');
  const [four, setFour] = useState('');
  const [five, setFive] = useState('');
  const [six, setSix] = useState('');

  return (
    <div className="App">
      <div
        style={{
          border: one,
          borderBottomLeftRadius: two,
          borderBottomRightRadius: three,
          borderTopLeftRadius: four,
          borderTopRightRadius: five,
          borderRadius: six,
        }}
        className="block"
      ></div>
      <form className="form">
        <input
          placeholder="border"
          className="input"
          value={one}
          onChange={(e) => setOne(e.target.value)}
        />
        <input
          placeholder="border-bottom-left-radius"
          className="input"
          value={two}
          onChange={(e) => setTwo(e.target.value)}
        />
        <input
          placeholder="border-bottom-right-radius"
          className="input"
          value={three}
          onChange={(e) => setThree(e.target.value)}
        />
        <input
          placeholder="border-top-left-radius"
          className="input"
          value={four}
          onChange={(e) => setFour(e.target.value)}
        />
        <input
          placeholder="border-top-right-radius"
          className="input"
          value={five}
          onChange={(e) => setFive(e.target.value)}
        />
        <input
          placeholder="border-radius"
          className="input"
          value={six}
          onChange={(e) => setSix(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
