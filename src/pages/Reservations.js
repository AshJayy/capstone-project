import React from "react";
import Details from "./Reservations/Details";
import Specification from "./Reservations/Specification"
import Tables from "./Reservations/Tables"

function Reservations(){
    return(
        <>
            <h1>Reservations</h1>
            <section>
                <Specification />
                <Tables />
                <Details />
            </section>
        </>
    );
}

export default Reservations;