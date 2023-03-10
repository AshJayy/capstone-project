import React from "react";
import './Specification.css'
import { DateTime } from "luxon";
import { useState } from "react";
import Date from "./components/Date";
import Time from "./components/Time";
import Persons from "./components/Persons";


function Specification() {

    const current = DateTime.now();

    const [date, setDate] = useState({
        month:"",
        date: ""
    })

    const [time, setTime] = useState({
        hours: "",
        min: ""
    })

    const [persons, setPersons] = useState(4);


    return(
        <div id="specif" className="bg-white">
            <h3>Customize your order</h3>
            <Date
                current = {current}
                set = {{date, setDate}}
            />
            <Time
                current = {current}
                set = {{time, setTime}}
            />
            <Persons
                set = {{persons, setPersons}}
            />
        </div>
    );
}

export default Specification;