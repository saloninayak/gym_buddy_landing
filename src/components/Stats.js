import React from 'react';
import school_icons from './schools_icons.png'
import './Stats.css'


function Stats() {
  return (
  
    <div className='school_section'>
       <h1 className='num'>1300+</h1>
      <h1 className='matches_made'>matches made at</h1>
      <img  className = "school-style" src={school_icons}></img>

    </div>
  );
}

export default Stats;
