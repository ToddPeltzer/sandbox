import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Link to="/sandbox">Home</Link>
        </div>
    );
}

export default Header;