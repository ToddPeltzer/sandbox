import React, { useRef, useEffect } from 'react';
import '../styles/canvas.css';

function CanvasCircle() {
    
    const canvasRef = useRef(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        window.addEventListener('resize', function(){
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        ctx.fillStyle = "red";
        ctx.strokeStyle = "yellow";
        ctx.beginPath();
        ctx.arc(100, 100, 50, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
        
    })

    return (
        <canvas ref={canvasRef} id="canvasCircle"></canvas>
    );
}

export default CanvasCircle;