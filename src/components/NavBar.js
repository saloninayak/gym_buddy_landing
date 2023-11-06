import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
       <a href="/">download</a>
      <a href="/">home</a>
      <a href="/about">about</a>
      <a href="/contact">contact</a>
    </nav>
  );
}

export default NavBar;
