import React from "react";
import Details from "./Reservations/Details";
import Specification from "./Reservations/Specification"

function Reservations(){
    return(
        <div className="bg-primary-dark">
            <h1>Reservations</h1>
            <section>
                <Specification />
                <Details />
            </section>
        </div>
    );
}

export default Reservations;