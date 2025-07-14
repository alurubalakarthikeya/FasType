import './App.css';
import React, { useState, useEffect } from 'react';
import { MdKeyboard, MdMenu, MdAccountCircle, MdNotifications } from 'react-icons/md';
import TypingBox from './components/TypingBox';
import Timer from './components/Timer';
import Stats from './components/Stats';

function App() {
  const [start, setStart] = useState(false);
  const [done, setDone] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [referenceText, setReferenceText] = useState('');

  const sentences = [
    "The art of typing quickly and accurately is a skill that can be improved over time with consistent and focused daily practice on meaningful sentences and challenging phrases.",
    "Every developer needs to master the keyboard, because speed and accuracy can make a massive difference when writing code, searching files, or simply navigating efficiently across windows.",
    "Practicing typing daily improves not just your WPM but also enhances your ability to focus, read faster, and write more confidently, especially under pressure or during time-bound exams.",
    "While it may seem repetitive, typing tests train muscle memory, allowing your fingers to glide across the keyboard with ease and rhythm, almost like playing a piano composition.",
    "Even the fastest typists started with slow speeds and lots of typos — the key to improvement is patience, posture, consistency, and choosing meaningful content to type daily.",
    "Proper hand positioning and consistent repetition of commonly used words can build unconscious familiarity that helps avoid errors and enhances your performance in typing competitions.",
    "Discipline and structure can turn even the slowest typist into someone capable of writing documents, code, or essays rapidly without compromising grammar or vocabulary usage.",
    "Many typing websites provide daily tests, accuracy tracking, and personalized progress reports — these are excellent tools if you're truly committed to growing your typing skills.",
    "Typing fluency is not only useful for writers and coders but also for students preparing for competitive exams, presentations, and email writing in professional environments.",
    "Instead of staring at the keyboard, try focusing on the screen and allow your fingers to learn positions naturally — this reduces dependency and increases long-term speed.",
    "Even in the age of AI, typing remains a valuable human skill — combining creativity with technical fluency can help you stand out in any field you pursue.",
    "Typing on a mechanical keyboard feels different than a laptop — the travel distance, feedback, and sound can make your typing experience either enjoyable or distracting.",
    "Speed should not come at the cost of accuracy — a good typist balances both, knowing when to go fast and when to slow down to avoid rework.",
    "You can measure your real-world typing ability by trying to retype blog posts, transcripts, or articles that interest you — this also helps with vocabulary and retention.",
    "Consistency beats intensity — typing for ten minutes a day every day builds more skill over time than doing one long session once a week and then forgetting it.",
    "Don’t forget to take breaks — hand fatigue and wrist pain are real issues in long sessions, so invest in ergonomics and stretch before and after your typing practice.",
    "Most modern keyboards are built for speed, but your setup matters too — good lighting, desk height, and a distraction-free screen can all improve your typing performance.",
    "Tracking your progress weekly and comparing accuracy and WPM trends over time will keep you motivated and help you identify when it's time to increase challenge levels.",
    "When typing difficult sentences, try saying them aloud in your head — this syncs your brain and fingers, helping improve flow and catching awkward phrasing or errors.",
    "The more you enjoy what you're typing, the faster and better you'll perform — so pick content that inspires, educates, or entertains you instead of something dull or random."
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    setReferenceText(sentences[randomIndex]);
  }, []);

  const handleStartTimer = () => {
    setStart(true);
    setStartTime(Date.now());
  };

  const handleComplete = (text) => {
    setTypedText(text);
    setEndTime(Date.now());
    setDone(true);
  };

  const handleTimeEnd = () => {
    setEndTime(Date.now());
    setDone(true);
  };

  return (
    <div className="App">
      <nav>
        <h2>FasType <MdKeyboard /></h2>
        <MdMenu className="menu-icon" />
        <ul>
          <li><MdNotifications className="notification-icon" /></li>
          <li><MdAccountCircle className="account-icon" /></li>
        </ul>
      </nav>
      <br></br>
      <br></br>
      <br></br>
      <div className="content">
        {referenceText && !done && (
          <>
            <Timer start={start} onTimeEnd={handleTimeEnd} />
            
            <TypingBox
              onComplete={handleComplete}
              startTimer={handleStartTimer}
              referenceText={referenceText}
            />
          </>
        )}
        {done && (
          <Stats
            typedText={typedText}
            referenceText={referenceText}
            duration={Math.max(1, Math.round((endTime - startTime) / 1000))}
          />
        )}
      </div>
    </div>
  );
}

export default App;
