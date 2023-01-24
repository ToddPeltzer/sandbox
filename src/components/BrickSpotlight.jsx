import React, { useState, useEffect } from 'react';
import '../styles/BrickSpotlight.css';

function BrickSpotlight() {

    const [uniqueId, setUniqueId] = useState("")

    // create an array of nothing to render that many list items
    let divArray = [];
    for (let i = 0; i < 195; i++) {
        divArray.push(i);
    }
    
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
            <ul>
            { divArray.map(item => {
    
            let customId = divArray.indexOf(item);
            let useThisId = `canvas${customId}`;

                return (
                    <li className="canvas-container">
                        <canvas id={useThisId} height="150px" width="300px">{item}</canvas>
                    </li>
                )
            })
            }
            </ul>
            <canvas id="canvas" height="150px" width="300px"></canvas>
        </div>
    );
}

export default BrickSpotlight;