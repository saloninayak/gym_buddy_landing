import React from 'react';
import main_img from './components/gym_buddy_main_img.png'; // Import the image
import logo from './components/gym_buddy_logo.png'; // Import the image
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
     
      <img src={logo} alt="Logo" className="logo" />
    
     
        <p className="bigtext"  >This is some text to the left of the image.</p>
       
      
          <img src={main_img} alt="My Image" className="centered-image" />
        
        
      <header className="App-header">
        <NavBar />
      </header>
     </div>
  
  );
}

export default App;
