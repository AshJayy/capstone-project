import React from "react";
import heroImg from './assets/img/hero_img.png';

function Hero(){
    return(
        <section id="hero">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
            </div>
            <div>
                <img src={heroImg} alt="hero image" />
            </div>
        </section>
    );
}

export default Hero;