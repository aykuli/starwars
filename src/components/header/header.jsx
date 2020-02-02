import React from 'react';

import './header.css';

const Header = ({ onServiceToggle }) => {
    return (
        <nav className="header d-flex">
            <h1><a href="/">StarBD</a></h1>            
            <ul className="d-flex">
                <li><a href="/">People</a></li>
                <li><a href="/">Planets</a></li>
                <li><a href="/">Starships</a></li>
            </ul>
            <button 
                className="btn btn-primary"
                onClick={onServiceToggle}>Toggle data</button>
        </nav>
    )
}

export default Header;
