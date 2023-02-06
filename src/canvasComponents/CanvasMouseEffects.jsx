import React from 'react';
import RandomCircles from './canvasMouse/RandomCircles';
import '../styles/canvas.css';

function Canvas() {

    return (
        <div className="canvas-random-circle-mouse-container">
            <RandomCircles />
        </div>
    );
}

export default Canvas;