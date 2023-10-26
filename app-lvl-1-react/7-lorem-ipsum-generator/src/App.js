import { useState } from 'react';
import './App.css';
import { loremIpsum } from 'lorem-ipsum';

function App() {
  const [number, setNumber] = useState();
  const [text, setText] = useState('');

  const handleCopyClick = () => {
    setText(loremIpsum);
    navigator.clipboard.writeText(loremIpsum({ count: number }));
  };

  return (
    <div className="App">
      <p>
        {loremIpsum({
          count: number, // Number of "words", "sentences", or "paragraphs"
          format: 'plain', // "plain" or "html"
          paragraphLowerBound: 3, // Min. number of sentences per paragraph.
          paragraphUpperBound: 7, // Max. number of sentences per paragarph.
          sentenceLowerBound: 5, // Min. number of words per sentence.
          sentenceUpperBound: 15, // Max. number of words per sentence.
          suffix: '\n', // Line ending, defaults to "\n" or "\r\n" (win32)
          units: 'paragraphs',
        })}
      </p>

      <input
        placeholder="max paragraphs"
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={handleCopyClick}>Copy Text</button>
    </div>
  );
}

export default App;
