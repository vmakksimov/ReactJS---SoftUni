import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Timer from './components/Timer';
import Handler from './components/Handler';
import Clicker from './components/Clicker';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Clicker></Clicker>
                <Handler/>
                <Header></Header>
                <Timer></Timer>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React!!!
                </a>
            </header>
        </div>
    );
}

export default App;
