import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Research from './pages/Research';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar className="fixed-header" />
      <Routes>
        <Route path="/mm-webpage" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer className="fixed-footer" />
    </Router>
  );
}

export default App;
