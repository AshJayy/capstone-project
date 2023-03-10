import React from "react";
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';
import { ReactComponent as Min } from '../../../assets/icons/minus.svg';

function Persons(props) {

    const styleMain = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    };

    const styleBtn = {
        backgroundColor: "hsl(150, 6%, 93%)",
        borderRadius: "8px",
        padding: "1em"
    };

    const styleTxt = {
        width: "8vw",
        padding: "1em",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }

    return(
        <div style={styleMain}>
            <div
                style={styleBtn}
                onClick={()=>{
                    props.set.setPersons(prev=>{return prev-1})
                }}
            >
                <Min height="1em" width="1em" />
            </div>
            <span style={styleTxt}>
                <h4>{props.set.persons+" persons"}</h4>
            </span>
            <div
                style={styleBtn}
                onClick={()=>{
                    props.set.setPersons(prev=>{return prev+1})
                }}
            >
                <Plus height="1em" width="1em" />
            </div>
        </div>
    );
}

export default Persons;