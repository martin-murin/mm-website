import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="fluid-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-header">
        <Link to="/" className="navbar-brand mx-4"><b>MM</b></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerState" aria-controls="navbarTogglerState" aria-expanded="true" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerState">
          <ul className="navbar-nav">
            <li className="nav-item active mx-auto">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item active mx-auto">
              <Link to="/research" className="nav-link">Research</Link>
            </li>
            {/* Add more links here if needed */}
          </ul>
        </div>
      </nav>
    </div>

  )
}

export default Navbar;