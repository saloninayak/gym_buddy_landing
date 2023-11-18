import React from 'react';
import './HowItWorks.css';
import Phone from './img/Phone.svg'; // Import the image
import Vector11 from './img/Vector11.svg';
import Vector10 from './img/Vector10.svg';

function HowItWorks() {
  return (
    <div className="HowItWorks">
         
        <div className="title-container">
            <div className="title">How It Works</div>
            <div className="caption">Find people who motivate you 🏋️</div>
        </div>
        
        <div className="body-container">
            <div className="bubble-container">
                <img src={Phone} alt="Image 1" className="phone-image-1" />
                <div className="bubble">    
                    <div className='blue-circle'>
                        <div class="white-number">1</div>
                    </div>

                    <div className='bubble-text'>
                        <div className="bubble-text-title">
                            <div>Set your gym style</div>
                        </div>
                        <div className="bubble-text-caption">
                            <div>matches are made based on your schedule, goals, and interests</div>
                        </div>
                    </div>          
                </div>

                <div className="arrow1-image">
                    <img src={Vector11} alt="Additional Image" />
                </div>
            </div>

            <div className="bubble-container">
                <div className="arrow2-image">
                    <img src={Vector10} alt="Additional Image" />
                </div>

                <div className="bubble">    
                    <div className='blue-circle'>
                        <div class="white-number">2</div>
                    </div>

                    <div className='bubble-text'>
                        <div className="bubble-text-title">
                            <div>Get matched</div>
                        </div>
                        <div className="bubble-text-caption">
                            <div>through friend requests or our Quick Pair auto-matching system</div>
                        </div>
                    </div>          
                </div>
                <img src={Phone} alt="Image 1" className="phone-image-2" />
            </div>

            <div className="bubble-container">
                <img src={Phone} alt="Image 1" className="phone-image-3" />
                <div className="bubble">    
                    <div className='blue-circle'>
                        <div class="white-number">3</div>
                    </div>

                    <div className='bubble-text'>
                        <div className="bubble-text-title">
                            <div>Gym together!</div>
                        </div>
                        <div className="bubble-text-caption">
                            <div>chat, send invites, and meet up for a pumped session</div>
                        </div>
                    </div>          
                </div>
            </div>
        </div>
    </div>
    );
}

export default HowItWorks;
