import React from "react";
import img from '../assets/img/about.png';
import './About.css';

function About(){
    return(
        <section id="about">
            <div className="highlight-dark">
                <h1 className="highlight-light" >Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.</p>
            </div>
            <div>
                <img src={img} alt="Mario and Adrian" />
            </div>
        </section>
    );
}

export default About;