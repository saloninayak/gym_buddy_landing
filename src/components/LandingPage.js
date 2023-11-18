import React from 'react';
import phone from './img/gym_buddy_main_img.png';

import hands from './img/hands.png';
import leftone from './img/leftone1.png';
import rightone from './img/rightone1.png';
import righttwo from './img/righttwo1.png';
import arrow from './img/arrow.png';
import './LandingPage.css';
// LandingPage.js

// LandingPage.js



const LandingPage = () => {
  return (
    
    <div className="landingpage-container">
    <img className="arrow-element" src={arrow} alt="icon" />
    <div className="header-text">gym together!</div>
    <div className="blue-box"></div>
    <div className="hand-container">
      <img className="hand" src={hands} alt="icon"/>
      </div>
      <div className="phone-container">
      <img className="phone" src={phone} alt="icon"/>
      </div>
      <div className="leftone-container">
      <img className="leftone" src={leftone} alt="icon"/>
      </div>
      <div className="rightone-container">
      <img className="rightone" src={rightone} alt="icon"/>
      </div>
      <div className="righttwo-container">
      <img className="righttwo" src={righttwo} alt="icon"/>
      </div>
      </div>
      
    
  );
};

export default LandingPage;


