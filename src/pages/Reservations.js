import React from "react";
import Details from "./Reservations/Details";
import Specification from "./Reservations/Specification";
import { useState } from "react";

function Reservations(){

    const [specif, setSpecif] = useState(false);

    return(
        <div className="bg-primary-dark">
            <h1>Reservations</h1>
            <section>
                <Specification
                    specif = {specif}
                    setSpecif = {setSpecif}
                />
                <Details
                    specif={specif}
                />
            </section>
        </div>
    );
}

export default Reservations;