
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import Doctors from './components/Doctors';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors/>}> </Route>
                <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </BrowserRouter>
  );
}