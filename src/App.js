import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Links from './Pages/Links';
import Names from './Pages/Names';

function App() {
  return (

    <BrowserRouter>
    
    <header>
      <nav>
        <ul>
          <li><Link to="/">Kezdő oldal</Link></li>
          <li><Link to="/Links">Linkek</Link></li>
          <li><Link to="Names">Nevek</Link></li>
        </ul>
      </nav>
    </header>

    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/Links' element={ <Links />} />
      <Route path='/Names' element={ <Names />} />
    </Routes>
    
    <footer>Copyright &copy; 2023</footer>
    </BrowserRouter>
  );
}

export default App;
