import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Separate CSS for Header

const Header = () => {
  return (
    <header className="header">
      <div className="logo">FutureSight</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;
