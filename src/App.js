import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Research from './pages/Research';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar className="fixed-header" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
      </Routes>
      <Footer className="fixed-footer" />
    </Router>
  );
}

export default App;
