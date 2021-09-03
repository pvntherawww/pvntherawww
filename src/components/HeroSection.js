import React from 'react';
import '../App.css';
import './HeroSection.css';
import sample from '../videos/VHSeffect.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video className='video' autoPlay loop muted>
      <source src={sample} type='video/mp4' />
      </video>
      <h1>W e l c o m e</h1>
      <p>Here I will post my tracks, sources and thoughts.</p>
      <div className='hero-btns'>
       
        
      </div>
    </div>
  );
}

export default HeroSection;