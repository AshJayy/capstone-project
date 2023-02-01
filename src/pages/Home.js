import React from "react";
import Hero from "./Hero";
import Reviews from "./Reviews";
import Specials from "./Specials";
import About from "./About"

function Home(){
    return(
        <>
            <Hero />
            <Specials />
            <Reviews />
            <About />
        </>
    );
}

export default Home;