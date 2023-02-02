import React from "react";
import { useState } from "react";
import {ReactComponent as Check} from '../assets/icons/roundCheck.svg';
import './Table.css';

function Table(props) {

    const [active, setActive] = useState(false);
    const [edge, setEdge] = useState("")
    const [tableClass, setTableClass] = useState("available")

    props.type == "circle" ? setEdge("50%") : setEdge("0.5rem");

    const styles = {
        gridColumn: props.width,
        gridRow: props.height,
        borderRadius: edge
       };

    const toggleActive = () => {
    active ? setActive(false) : setActive(true);
    active ? setTableClass("active") : setTableClass("available");
    }

    const TableDiv = () => {
        if(props.available){
            return(
                <div
                    key={props.key}
                    style={styles}
                    className={tableClass}
                    onClick={toggleActive}
                >
                    {active && <Check />}
                </div>
            );
        } else {
            return(
                <div
                    key={props.key}
                    style={styles}
                    className={"unavailable"}
                ></div>
            )
        }
    }

    return(
        <>
            <TableDiv />
        </>
    );
}

export default Table;