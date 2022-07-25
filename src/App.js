import './App.scss';

const [firstCity, second] = ["Tokyo", "London", "New York"];

console.log(firstCity)
console.log(second)

function App({library}) {
  return (
    <div className="App">
      <h1>Hello From {library}</h1>
    </div>
  );
}

export default App;
