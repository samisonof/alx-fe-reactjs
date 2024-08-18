import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#333',
    padding: '10px',
  };

  const linkStyle = {
    color: '#fff',
    margin: '0 10px',
    textDecoration: 'none',
  };

  return (
    <nav style={navStyle}>
      <ul style={{ listStyleType: 'none', display: 'flex' }}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/services" style={linkStyle}>Services</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
