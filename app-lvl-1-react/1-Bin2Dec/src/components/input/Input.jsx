import React, { useState } from 'react';
import './style.css';

function Input() {
  const [inputOne, setInputOne] = useState('');

  const what = () => {
    if (inputOne !== '') {
      return parseInt(inputOne, 2);
    } else {
      return 'decimal number';
    }
  };

  console.log(inputOne);

  function del() {
    setInputOne('');
  }

  return (
    <>
      <form>
        <input
          type="text"
          value={inputOne}
          onChange={(event) => setInputOne(event.target.value)}
        ></input>
      </form>
      <p>{what()}</p>
      <button onClick={del}>Delete</button>
    </>
  );
}

export default Input;
