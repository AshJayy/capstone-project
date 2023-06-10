import React from "react";
import './Specification.css'
import { DateTime } from "luxon";
import { useState, useEffect } from "react";
import Date from "./components/Date";
import Time from "./components/Time";
import Persons from "./components/Persons";
import Occasion from "./components/Occasion";


function Specification(props) {

    const current = DateTime.now();

    const [date, setDate] = useState({
        month:"",
        date: ""
    })

    const [time, setTime] = useState({
        hours: "",
        min: "",
        ampm: ""
    })

    const [persons, setPersons] = useState(4);

    useEffect(() => {
        if ((date.month !== "" &&
        date.date !== "" &&
        time.hours !== "" &&
        time.min !== "" &&
        time.ampm !== "")) {props.setSpecif(true);}
    }, [date, time, persons, props])


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
            <Occasion />
        </div>
    );
}

export default Specification;