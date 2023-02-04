import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div>
            <h1>Sandbox Home</h1>
            <Link to="/word-count">Word Count</Link>
            <br></br>
            <Link to="/canvas">Canvas</Link>
            <br></br>
            <Link to="/pokemon">Pokemon</Link>
        </div>
    );
}

export default Main;