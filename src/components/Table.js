import React from "react";
import { useState } from "react";
import {ReactComponent as Check} from '../assets/icons/roundCheck.svg';
import './Table.css';

function Table(props) {

    // const [active, setActive] = useState(false);
    const [tableClass, setTableClass] = useState("available")

    var edge = props.type === "c" ? "50%" : "1rem";

    const styles = {
        borderRadius: edge,
        gridColumn: props.col,
        gridRow: props.row,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
       };


    const toggleActive = () => {
    // active ? setActive(false) : setActive(true);
    tableClass === "available" ? setTableClass("active") : setTableClass("available");
    }

    const TableDiv = () => {
        if(props.available){
            return(
                <div
                    key={props.key}
                    style={styles}
                    className={tableClass}
                    onClick={toggleActive}
                    value = {props.value}
                >
                    {props.key}
                    {tableClass === "active" && <Check />}
                </div>
            );
        } else {
            return(
                <div
                    key={props.key}
                    style={styles}
                    className={"unavailable"}
                >{props.key}</div>
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