import React from 'react';
import { loremIpsum } from 'lorem-ipsum';

function Text() {
  return (
    <>
      <p style={{ maxWidth: '500px' }}>
        {loremIpsum({
          count: 1, // Number of "words", "sentences", or "paragraphs"
          format: 'plain', // "plain" or "html"
          paragraphLowerBound: 3, // Min. number of sentences per paragraph.
          paragraphUpperBound: 7, // Max. number of sentences per paragarph.
          sentenceLowerBound: 5, // Min. number of words per sentence.
          sentenceUpperBound: 15, // Max. number of words per sentence.
          suffix: '\n', // Line ending, defaults to "\n" or "\r\n" (win32)
          units: 'paragraphs',
        })}
      </p>
    </>
  );
}



export default Text
