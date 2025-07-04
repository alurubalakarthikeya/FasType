import React, { useState, useEffect } from 'react';

const paragraph = "The quick brown fox jumps over the lazy dog";

export default function TypingBox({ onComplete, startTimer }) {
  const [text, setText] = useState('');
  const [isTypingStarted, setIsTypingStarted] = useState(false);

  useEffect(() => {
    if (text.length === 1 && !isTypingStarted) {
      setIsTypingStarted(true);
      startTimer();
    }
    if (text === paragraph) onComplete(text);
  }, [text]);

  return (
    <div>
      <p>{paragraph}</p>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Start typing here..."
      />
    </div>
  );
}
