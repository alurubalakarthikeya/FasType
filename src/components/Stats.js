import React from 'react';

const Stats = ({ typedText, referenceText, duration }) => {
  const wordCount = typedText.trim().split(/\s+/).filter(word => word !== "").length;
  const wpm = Math.round((wordCount / duration) * 60);

  const totalChars = referenceText.length;
  const correctChars = typedText.split('').filter((char, idx) => char === referenceText[idx]).length;
  const accuracy = ((correctChars / totalChars) * 100).toFixed(2);

  return (
    <div className="stats">
      <h3>Typing Test Result</h3>
      <p><strong>WPM:</strong> {wpm}</p>
      <p><strong>Accuracy:</strong> {accuracy}%</p>
      <p><strong>Characters Typed:</strong> {typedText.length} / {totalChars}</p>
    </div>
  );
};

export default Stats;
