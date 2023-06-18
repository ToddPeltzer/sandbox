import React from 'react';
import CanvasFallingPixels from './CanvasFallingPixel';
import '../styles/canvas.css';

function Canvas() {

    return (
        <div className="canvas=page">
            <div className="canvas-falling-container">
                <CanvasFallingPixels />
            </div>
        </div>
    );
}

export default Canvas;