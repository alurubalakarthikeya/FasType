import React from 'react';

export default function Stats({ typedText, duration }) {
  const words = typedText.trim().split(/\s+/).length;
  const wpm = Math.round((words / duration) * 60);

  return (
    <div>
      <h3>Results:</h3>
      <p>Words Typed: {words}</p>
      <p>WPM: {wpm}</p>
    </div>
  );
}
