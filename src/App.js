import "./App.css";
import CounterApp from "./component/CounterApp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/LeetCode_Logo_black_with_text.svg/200px-LeetCode_Logo_black_with_text.svg.png?20200122084501"
            alt="logo"
          />
        </div>
        <CounterApp />
      </header>
    </div>
  );
}

export default App;