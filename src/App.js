import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Merch from './pages/Merch/Merch'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='merch' element={<Merch />} />
    </Routes>
    </>
  );
}

export default App;
