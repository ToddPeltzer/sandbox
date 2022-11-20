import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div>
            <h1>Sandbox Home</h1>
            <Link to="/word-count">Word Count</Link>
            <br></br>
            <Link to="/brick-spotlight">Brick Spotlight</Link>
        </div>
    );
}

export default Main;