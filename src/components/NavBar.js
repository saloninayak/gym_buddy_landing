import React from 'react';
import './NavBar.css';
import logo from './img/gym_buddy_logo.png'


function NavBar() {
  return (
    <div className="navbar-container">
      <div className="logo-container">
      <img className="logo" src={logo} alt="icon" />

      </div>
      <div className="button-container">
        <div className="nav-button">Features</div>
        <div className="nav-button">About Us</div>
        <div className="nav-button">Contact</div>
        <div className="down-button">Download ✨</div>
      </div>
    </div>
  );
}

export default NavBar;