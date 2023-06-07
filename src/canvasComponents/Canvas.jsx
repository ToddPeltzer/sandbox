import React from 'react';
import CanvasCircle from './CanvasCircle';
import CanvasMouseEffects from './CanvasMouseEffects';
import GeneratedCircles from './GeneratedCircles';
import CanvasFallingPixels from './CanvasFallingPixels';
import '../styles/canvas.css';

function Canvas() {

    return (
        <div>
            <div className="canvas-circle-container">
                <CanvasCircle />
            </div>
            <div className="canvas-generate-circle-container">
                <GeneratedCircles />
            </div>
            <div className="canvas-mouse-container">
                <CanvasMouseEffects />
            </div>
            <div className="canvas-falling-container">
                <CanvasFallingPixels />
            </div>
        </div>
    );
}

export default Canvas;