import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ onServiceToggle }) => {
    return (
        <nav className="header d-flex">
            <h1><a href="/">StarBD</a></h1>            
            <ul className="d-flex">
                <li><Link to="/people">People</Link></li>
                <li><Link to="/planets">Planets</Link></li>
                <li><Link to="/starships">Starships</Link></li>
            </ul>
            <button 
                className="btn btn-primary"
                onClick={onServiceToggle}>Toggle data</button>
        </nav>
    )
}

export default Header;
