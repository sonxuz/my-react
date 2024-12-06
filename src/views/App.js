import logo from './logo.svg';
import './App.scss';

function App() {

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         xin chào thé giới sau tận thế <br></br>
         <code>navar/bay.js</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <button>click me</button>
        </div>
      </header>
    </div>
  );
}

export default App;
