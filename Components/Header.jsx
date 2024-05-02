// src/components/Header.js

// import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Import your CSS file for styling
import logo from '../assets/images/logo.png';



export default function Header() {
  return (
    <header className='myHeader'>
      <nav>
        <div className="logo">
          <Link to="/WanderEthio"></Link>
          <img src={logo} alt="Logo" />
        </div>
        
        <ul className="nav-links">
        
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}


