import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    return (
        <div className='navigation'>
            <nav>

                <img src="./public/logo.png" className="logo"></img>
                <div className="nav-container">
                    <div className="menu-icon" onClick={toggleMenu}>☰</div>
                    <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about-me'>About Me</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/contact-me'>Contact Me</Link></li>
                    </ul>
                </div>

            </nav>
        </div>
    );
}

export default Navigation;