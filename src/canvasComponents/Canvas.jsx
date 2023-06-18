import React from 'react';
import CanvasCircle from './CanvasCircle';
import CanvasMouseEffects from './CanvasMouseEffects';
import GeneratedCircles from './GeneratedCircles';
import '../styles/canvas.css';

function Canvas() {

    return (
        <div className="canvas-page">
            <div className="canvas-mouse-container">
                <CanvasMouseEffects />
            </div>
            <div className="canvas-circle-container">
                <CanvasCircle />
            </div>
            <div className="canvas-generate-circle-container">
                <GeneratedCircles />
            </div>
        </div>
    );
}

export default Canvas;