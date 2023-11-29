import logo from './mushroom2.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Super Mario RPG Is On Sale.
        </p>
        <a
          className="App-link"
          href="https://www.nintendo.com.hk/switch/a8lua/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go Nintendo
        </a>
      </header>
    </div>
  );
}

export default App;
