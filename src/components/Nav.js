import React from "react";
import './Nav.css'
import logo from '../assets/logo.png';

function Nav(){
    return(
        <nav>
            <ul id="header-content" className="make-dropdown navul card-title highlight-dark">
                <li><img src={logo} alt="logo" id="logo"/></li>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Order Online</li>
                <li>Reservations</li>
                <li>Login</li>
            </ul>
        </nav>
    );
}

export default Nav;