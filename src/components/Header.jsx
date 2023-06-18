import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
    return (
        <nav className="header-container">
            <Link to="/sandbox">Home</Link>
            <Link to="/sandbox/word-count">Word Count</Link>
            <Link to="/sandbox/canvas">Canvas</Link>
            <Link to="/sandbox/pokemon">Pokemon</Link>
            <Link to="/sandbox/3d-scroll">3D Scroll</Link>
        </nav>
    );
}

export default Header;