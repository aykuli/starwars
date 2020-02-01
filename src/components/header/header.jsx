import React from 'react';

import './header.css';

const Header = () => {
    return (
        <nav className="header d-flex">
            <h1><a href="/">StarBD</a></h1>
            
            <ul className="d-flex">
                <li><a href="/">People</a></li>
                <li><a href="/">Planets</a></li>
                <li><a href="/">Starships</a></li>
            </ul>
        </nav>
    )
}

export default Header;
