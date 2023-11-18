import React from 'react';
import './AboutUs.css';
import firstText from './img/Frame23.svg';
import secondText from './img/Frame24.svg';
import thirdText from './img/Frame25.svg';



function AboutUs() {
  return (
    <div className="aboutApp">
      <header className="aboutApp-header">
        <h2 className="aboutAbout">About Us</h2>
        <h1 className="titleAbout">Made for students, by students</h1>
        <p className="parAbout">
          It all started when Matthew couldn’t make gym day, and Eugene didn’t want to go alone. They
          realized the importance of having a buddy to work out with consistently. Since then, they have
          embarked on a mission to help every student on their fitness journey.
        </p>
      </header>
      <div style={{ paddingBottom: '100px' }}></div>
      <div className="chat">
        <img className="firstText" src={firstText} alt="firstText" />
        <img className="secondText"src={secondText} alt="secondText" />
        <img className="thirdText" src={thirdText} alt="thirdText" />
      </div>
      <div style={{ paddingBottom: '100px' }}></div>
    </div>
  );
}

export default AboutUs;
