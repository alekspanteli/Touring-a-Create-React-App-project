import './App.scss';
import { useRef } from 'react';

function App() {

  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    title.current.value = "";
    color.current.value = "";
  }
 
  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder="color title" />
      <input ref={hexColor} type="color" />
      <button>ADD</button>
    </form>
  );
}

export default App;
