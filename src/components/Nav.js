import React from "react";
import './Nav.css'
import logo from '../assets/logos/logo.png';
import { Link } from "react-router-dom";



function Nav(){
    return(
        <nav>
            <ul id="header-content" className="make-dropdown navul card-title highlight-dark">
                <li><img src={logo} alt="logo" id="logo"/></li>
                <li><Link to="/"> Home</Link></li>
                <li>About</li>
                <li>Menu</li>
                <li>Order Online</li>
                <li><Link to="/Reservations">Reservations</Link></li>
                <li>Login</li>
            </ul>
            
        </nav>
    );
}

export default Nav;