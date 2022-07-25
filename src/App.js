import './App.scss';
import { useState } from 'react';

function App() {
  const [emotion, setEmotion] = useState("happy");
  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("exited")}>Exited</button>
      <button onClick={() => setEmotion("angry")}>Angry</button>
    </div>
  );
}

export default App;
