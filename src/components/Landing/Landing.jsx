import React from 'react';
import hero from '../../assets/hero.png'
import Typewriter from 'typewriter-effect';
import './Landing.css'

const Landing = () => {
    return (
        <div className="landing-container">
            <div data-aos = "fade-right" className="landing-left">
                <h1 className='landing-header'>Can you Type ?</h1>
                <div className="typewriter-container">
                    
                <Typewriter
                    options={{
                        strings: ['fast?', 'correct?', 'quick?'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </div>
            </div>
            <div className="landing-right">
                <img src={hero} alt="hero" className="flash-image" />
            </div>
        </div>
    )
}

export default Landing;