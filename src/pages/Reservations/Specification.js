import React from "react";
import './Specification.css'
import Date from "./components/Date";


function Specification() {



    return(
        <div id="specif" className="bg-white">
            <h3>Customize your order</h3>
            <div>
                <span>
                    <h4>Pick a date</h4>
                </span>
                <Date />
            </div>
        </div>
    );
}

export default Specification;