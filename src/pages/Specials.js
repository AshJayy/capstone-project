import React from "react";
import './Specials.css';
import SpecialsCard from "../components/SpecialsCard";

function Specials(){

    return(
        <section id="specials">
            <div>
                <div>
                    <h1>This week's specials!</h1>
                    <button>Online Menu</button>
                </div>
                <SpecialsCard />
            </div>
        </section>
    );
}

export default Specials;