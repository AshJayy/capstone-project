import React from "react";
import DropDown from "../../../components/DropDown";

function Occasion(props){

    const occasionNames = ["None", "Anniversary", "Birthday", "Other"]
    props.set.setOccasion(occasionNames[0]);

    console.log(props.set.occasion);

    const styleSel = {
        background: "hsl(150, 6%, 93%)",
        width: "10rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px 0 0 8px",
        color: "hsl(160, 13%, 33%)"
    }
    const styleBtn = {
        background: "hsl(150, 6%, 93%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0 8px 8px 0"
    }

    return(
        <div className="flex-row" id="occasion">
            <h4>Occasion</h4>
            <DropDown
                options={occasionNames}
                styleSel={styleSel}
                styleBtn={styleBtn}
                selectedOp={props.set.occasion}
                colorBtn="hsl(160, 13%, 33%)"
                handleClick={(occ) => {props.set.setOccasion(occ)}}
            />
        </div>
    );
};

export default Occasion;