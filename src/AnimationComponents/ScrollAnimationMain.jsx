import React from 'react';
import Jumbotron from './jumbotron';
import SoundSection from './SoundSection';
import './styles/ScrollStyles.css';

function ScrollAnimationMain() {

    return (
        <div className='scroll-anm-container'>
            <Jumbotron />
            <SoundSection />
        </div>
    );
}

export default ScrollAnimationMain;