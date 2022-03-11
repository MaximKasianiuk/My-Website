import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className = 'hero-container'>
        <video src='/videos/video-2.mp4' autoPlay loop muted />  
        <h1>Get to know me</h1> 
        <p> What do you want to know?</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'
            >
              Explore
            </Button>
            
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'
            >
            WATCH SNIPPET <i className = 'far fa-play-circle' />
            </Button>
        </div>
    </div>
  );
}

export default HeroSection;