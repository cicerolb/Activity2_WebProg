import React from 'react';
import {Link} from 'react-router-dom';
import './css/Navbar.css'

function Navbar(){
    return(
        <div>
            <header className = "header">
                <a href="/" className="logo">Activity 2</a>

                <nav className="navbar">
                    <Link to='/Home'>Home</Link>
                    <Link to='/About'>About</Link>
                    <Link to='/Contact'>Contact</Link>
                    <Link to='/CounterPage'>Counter</Link>
                    
        
                </nav>
            </header>
        </div>
    )
}

export default Navbar;