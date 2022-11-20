import React, { useState, useEffect } from 'react';
import '../styles/BrickSpotlight.css';

function BrickSpotlight() {
    
        useEffect(() => {
            let canvas = document.getElementById("canvas");
            let ctx = canvas.getContext("2d");
            ctx.beginPath()
            ctx.strokeStyle = 'black'
            ctx.fillStyle = 'red'
            ctx.lineWidth = 10
            ctx.rect(0, 0, 300, 150)
            ctx.fill()
            ctx.stroke()
        })
    
        return (
            <div className='top-div'>
                <canvas id="canvas" height="150px" width="300px"></canvas>
            </div>
        );
}

export default BrickSpotlight;