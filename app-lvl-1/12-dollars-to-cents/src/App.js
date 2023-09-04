import React, { useState } from 'react';


function App() {
  const [dollarValue, setDollarValue] = useState('');
  const [cents, setCents] = useState(null);
  const [quarters, setQuarters] = useState(0);
  const [dimes, setDimes] = useState(0);
  const [nickels, setNickels] = useState(0);
  const [pennies, setPennies] = useState(0);

  const handleConvert = () => {
    if (!isNaN(parseFloat(dollarValue))) {
      const centsValue = Math.round(parseFloat(dollarValue) * 100);
      setCents(centsValue);

      let remainingCents = centsValue;

      const numQuarters = Math.floor(remainingCents / 25);
      remainingCents %= 25;
      setQuarters(numQuarters);

      const numDimes = Math.floor(remainingCents / 10);
      remainingCents %= 10;
      setDimes(numDimes);

      const numNickels = Math.floor(remainingCents / 5);
      remainingCents %= 5;
      setNickels(numNickels);

      setPennies(remainingCents);
    } else {
      alert('Invalid input. Please enter a valid dollar value.');
    }
  };

  return (
    <div>
      <h2>Dollar to Cents Converter</h2>
      <div>
        <label>
          Enter a dollar value: $
          <input
            type="text"
            value={dollarValue}
            onChange={(e) => setDollarValue(e.target.value)}
          />
        </label>
        <button onClick={handleConvert}>Convert</button>
      </div>
      {cents !== null && (
        <div>
          <p>Total cents: {cents}</p>
          <p>Fewest coins representation:</p>
          <p>Quarters: {quarters}</p>
          <p>Dimes: {dimes}</p>
          <p>Nickels: {nickels}</p>
          <p>Pennies: {pennies}</p>
        </div>
      )}
    </div>
  );
};

export default App;
