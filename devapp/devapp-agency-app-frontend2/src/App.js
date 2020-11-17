import logo from './Infinity-Arrow.svg';

import './App.css';
import Navbar from './components/Navbar.js';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
   
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Headliner">Hello, we are DevApp Agency, a digital agency for your technological needs and dreams.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </header>

    </div>
  );
}

export default App;
