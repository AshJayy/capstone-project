import React from "react";
import './Footer.css';
import logo from "../assets/mono_logo_dark.png";

function Footer(){
    return(
        <footer>
            <ul id="content-main">
                <li>
                    <div>
                        <img src={logo} alt="logo"/>
                    </div>
                </li>
                <li>
                    <p>Navigation</p>
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
                    <p>Contact</p>
                    <ul>
                        <li>Address</li>
                        <li>Email</li>
                        <li>Phone</li>
                    </ul>
                </li>
                <li>
                    <p>Social Media</p>
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