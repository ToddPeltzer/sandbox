import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div>
            <h1>Sandbox Home</h1>
            <Link to="/sandbox/word-count">Word Count</Link>
            <br></br>
            <Link to="/sandbox/canvas">Canvas</Link>
            <br></br>
            <Link to="/sandbox/pokemon">Pokemon</Link>
        </div>
    );
}

export default Main;