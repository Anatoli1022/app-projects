import * as math from 'mathjs';
import React from 'react';
import Button from './components/button/Button';
import { useState } from 'react';
import Input from './components/input/Input';
import './App.scss';

const App= () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const addToText = (val) => {
    setText((text) => [...text, val + ' ']);
  };

  const calculateResult = () => {
    const input = text.join('');
    setResult(math.evaluate(input));
  };




  const del = () => {
    setText('');
    setResult('');
  };

  return (
    <div className="App">
      <div>
        <Input result={result} text={text} />
        <div className="button-wrapperr">
          <Button value="7" handleClick={addToText}></Button>
          <Button value="8" handleClick={addToText}></Button>
          <Button value="9" handleClick={addToText}></Button>
          <Button value="/" handleClick={addToText}></Button>
        </div>
        <div className="button-wrapperr">
          <Button value="4" handleClick={addToText}></Button>
          <Button value="5" handleClick={addToText}></Button>
          <Button value="6" handleClick={addToText}></Button>
          <Button value="*" handleClick={addToText}></Button>
        </div>
        <div className="button-wrapperr">
          <Button value="1" handleClick={addToText}></Button>
          <Button value="2" handleClick={addToText}></Button>
          <Button value="3" handleClick={addToText}></Button>
          <Button value="-" handleClick={addToText}></Button>
        </div>
        <div className="button-wrapperr">
          <Button value="0" handleClick={addToText}></Button>
          <Button value="." handleClick={addToText}></Button>
          <Button value="=" handleClick={calculateResult}></Button>
          <Button value="+" handleClick={addToText}></Button>
          <Button value="ac" handleClick={del}></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
