import React, { useRef, useEffect } from 'react';
import '../styles/canvas.css';

function GeneratedCircles() {
    
    // lets us access canvas DOM nodes as an object with initial value set to null
    // set as a ref on the canvas element
    const canvasRef = useRef(null);
    
    useEffect(() => {
        // lets canvas continue to update after initial render
        const canvas = canvasRef.current;
        // gets us the current canvas element
        const ctx = canvas.getContext("2d");
        console.log(ctx)
        //will be used to store the generated particles
        const particleArray = [];

        let hue = 0;

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

        class Particle {
            constructor() {
                //particle starting coordinates
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                //size of the particle
                this.size = Math.random() * 15 + 1;
                //speed in which the particle moves in X and Y axis
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
            }
            //updating the movements of the particle
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                //shrinks particle size
                if(this.size > 0.2) {
                    this.size -= 0.1;
                }
            }
            //making the particle a circle
            draw() {
                ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initiate() {
            for(let i=0; i < 100; i++) {
                particleArray.push(new Particle());
            }
        }
        initiate();

        function handleParticles() {
            for(let i = 0; i < particleArray.length; i++) {
                particleArray[i].update();
                particleArray[i].draw();
                //deletes particle from array
                if(particleArray[i].size <= 0.3) {
                    particleArray.splice(i, 1);
                    --i;
                }
            }
        }   

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            handleParticles();
            hue++;
            requestAnimationFrame(animate);
        }
        animate();
        
    })

    return (
        <canvas ref={canvasRef} id="GeneratedCircles"></canvas>
    );
}

export default GeneratedCircles;