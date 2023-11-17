import React from 'react';
import './Footer.css';
import instagram from './instagram.png';
import linkedin from './linkedin.png';
import facebook from './facebook.png';
import footer_download from './footer_download_button.png';

const Footer = () => {
  return (
    <footer className='footer-style'>
      <style>
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500&display=swap');
     </style>
     <div className='footer-text'>
     <h3 className='sec-title'>The Grind Doesn't Stop</h3>
      <h1 className='main-title'>Become a GymBuddy Today!</h1>
      <h4 className='email-title'>hellogymbuddy@gmail.com</h4>
      </div>
      <div className='icons-style'>
      <a href = "https://www.instagram.com/gymbuddy.ucd/?hl=en" alt = "gym buddy instagram link">
      <img src={instagram}/>
      </a>
      <a href = "https://www.linkedin.com/company/gymbuddyapp/" alt = "gym buddy linkedin link">
      <img src={linkedin}/>
      </a> 
      </div>
      <a href = "https://apps.apple.com/us/app/gymbuddy-connect-workout/id6446038725" alt = "gym buddy app store link">
      <img className = 'footer-download'src={footer_download}/> 
      </a>
     

 

      <p>&copy; 2023 Your Company</p>
    </footer>
  );
};

export default Footer;