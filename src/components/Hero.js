import React from "react";
import './Hero.css';
import heroImg from '../assets/img/hero_img.png';

function Hero(){
    return(
        <section id="hero" className="bg-primary-dark primary-light">
            <div>
                <div>
                    <h1 className="highlight-light">Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                </div>
                <button>Reserve a table</button>
            </div>
            <div>
                <img src={heroImg} alt="hero" />
            </div>
        </section>
    );
}

export default Hero;