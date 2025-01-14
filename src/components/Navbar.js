import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/overview">Overview</Link></li>
        <li className="navbar-item"><Link to="/data">Data</Link></li>
        <li className="navbar-item"><Link to="/model">Model</Link></li>
        <li className="navbar-item"><Link to="/dashboard">Dashboard</Link></li>
        <li className="navbar-item"><Link to="/results">Results</Link></li>
        <li className="navbar-item"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

