import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Merch from './pages/Merch';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='merch' element={<Merch />} />
    </Routes>
    </>
  );
}

export default App;
