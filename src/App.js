import './App.scss';
import { useState, useEffect } from 'react';

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  
  useEffect(() => {
    console.log(`It's ${emotion} right now`)
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here`)
  }, [secondary])

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("exited")}>Exited</button>
      <button onClick={() => setEmotion("angry")}>Angry</button>
      <h2>Current secondary emotion is {secondary}</h2>
      <button onClick={() => setSecondary("grateful")}>Grateful</button>
    </div>
  );
}

export default App;
