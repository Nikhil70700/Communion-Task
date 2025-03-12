import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src="/logo.png" alt="MyApp Logo" />
        </NavLink>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active-link" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active-link" : ""}>
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active-link" : ""}>
            About
          </NavLink>
        </li>
      </ul>

      <div className="navbar-signin">
        <a href="#" className="signin-button">Sign In</a>
      </div>
    </nav>
  );
};

export default Navbar;
