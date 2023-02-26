
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';
import Products from './components/Products';


function App() {
  return (
    <div className="App">
      <h1>Hello React Router</h1>

      <Navigation/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/about/*' element={<h2>About All</h2>}/>
        <Route path='/products/:productId' element={<Products/>}/>

      </Routes>
    </div>
  );
}

export default App;
