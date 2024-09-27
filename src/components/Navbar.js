import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    const handleNavLinkClick = () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarToggler && navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    };

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.addEventListener('click', handleNavLinkClick));

    return () => {
      navLinks.forEach(link => link.removeEventListener('click', handleNavLinkClick));
    };
  }, [location]);

  return (
    <div className="fluid-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-header">
        <Link to="/" className="navbar-brand mx-4"><b>MM</b></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerState" aria-controls="navbarTogglerState" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerState">
          <ul className="navbar-nav">
            <li className="nav-item active mx-auto">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item active mx-auto">
              <Link to="/research" className="nav-link">Research</Link>
            </li>
            <li className="nav-item active mx-auto">
              <Link to="/blog" className="nav-link">Blog</Link>
            </li>
            {/* Add more links here if needed */}
          </ul>
        </div>
      </nav>
    </div>

  )
}

export default Navbar;