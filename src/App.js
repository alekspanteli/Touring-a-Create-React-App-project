import "./App.scss";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("");
  };

  return (
    <form onSubmit={submit}>
      <input
        onChange={(event) => setTitle(event.target.value)}
        value={title}
        type="text"
        placeholder="color title"
      />
      <input
        onChange={(event) => setColor(event.target.value)}
        value={color}
        type="color"
      />
      <button>ADD</button>
    </form>
  );
}

export default App;
