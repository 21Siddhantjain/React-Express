import logo from './logo.svg';
import './App.css';
import Customer from './components/customer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Customer />
      </header>
    </div>
  );
}

export default App;
