import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { MdKeyboard } from 'react-icons/md';
import { MdMenu } from 'react-icons/md';
import TypingBox from './components/TypingBox';
import Timer from './components/Timer';
import Stats from './components/Stats';
function App() {
  const [start, setStart] = useState(false);
  const [done, setDone] = useState(false);
  const [typedText, setTypedText] = useState('');

  const handleComplete = (text) => {
    setTypedText(text);
    setDone(true);
  };

  const handleTimeEnd = () => {
    setDone(true);
  };
  return (
    <div className="App">
      <nav>
        <h2>FasType <MdKeyboard /></h2>
        <MdMenu className="menu-icon" />
        <ul>
          <li>Current: </li>
          <li>Highest: </li>
          <li>Average: </li>
        </ul>
      </nav>
      {!done && (
        <>
          <Timer start={start} onTimeEnd={handleTimeEnd} />
          <TypingBox onComplete={handleComplete} startTimer={() => setStart(true)} />
        </>
      )}
      {done && <Stats typedText={typedText} duration={60} />}
    </div>
  );
}

export default App;
