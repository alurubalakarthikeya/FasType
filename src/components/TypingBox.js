import React, { useState, useEffect } from 'react';

const TypingBox = ({ onComplete, startTimer, referenceText }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (input.length === 1) startTimer();
    if (input.length >= referenceText.length) {
      onComplete(input);
    }
  }, [input, referenceText.length, onComplete, startTimer]);

  return (
    <div className="typing-box">
      <p className="reference-text">{referenceText}</p>
      <br></br>
      <textarea
        placeholder="Start typing here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={5}
        cols={60}
        autoFocus
      />
    </div>
  );
};

export default TypingBox;
