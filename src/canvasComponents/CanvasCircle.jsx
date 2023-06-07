import React, { useRef, useEffect } from 'react';
import '../styles/canvas.css';

function CanvasCircle() {
    
    // lets us access canvas DOM nodes as an object with initial value set to null
    // set as a ref on the canvas element
    const canvasRef = useRef(null);
    
    useEffect(() => {
        // lets canvas continue to update after initial render
        const canvas = canvasRef.current;
        // gets us the current canvas element
        const ctx = canvas.getContext("2d");
        console.log(ctx)

        // mouse object
        const mouse = {
            x: null,
            y: null
        }

        window.onload = function() {
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
        };

        // responsive for the canvas area
        window.addEventListener('resize', function(){
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        // updating mouse values whenever clicked
        canvas.addEventListener('mousemove', function(e){
            mouse.x = e.x;
            mouse.y = e.y;
        })

        function drawCircle() {
            ctx.fillStyle = "#FFFFFF";
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI*2);
            ctx.fill();
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawCircle();
            requestAnimationFrame(animate);
        }
        animate();
        
    })

    return (
        <canvas ref={canvasRef} id="canvasCircle"></canvas>
    );
}

export default CanvasCircle;