import React from "react";
import './Footer.css';
import logo from "../assets/logos/mono_logo_dark.png";

function Footer(){
    return(
        <footer className="bg-primary-dark">
            <ul id="footer-content" className="navul make-dropdown primary-light">
                <li>
                    <div>
                        <img src={logo} alt="logo"/>
                    </div>
                </li>
                <li>
                    <h4>Navigation</h4>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Order Online</li>
                        <li>Reservations</li>
                        <li>Login</li>
                    </ul>
                </li>
                <li>
                    <h4>Contact</h4>
                    <ul>
                        <li>Address</li>
                        <li>Email</li>
                        <li>Phone</li>
                    </ul>
                </li>
                <li>
                    <h4>Social Media</h4>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                    </ul>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;