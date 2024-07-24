import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './navBar.css';


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='navbar'>
            <div className='navbar-brand'>
                <Link to="/">News</Link>
                <button className="navbar-toggler" onClick={toggleNavbar}>
                    ☰
                </button>
            </div>
            <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
                <Link to="/" className="navbar-item">Home</Link>
                <Link to="/about" className="navbar-item">About</Link>
                <Link to="/contact" className="navbar-item">Contact</Link>
            </div>
            <div className='search'>
             
            </div>
        </nav>

    )
}
