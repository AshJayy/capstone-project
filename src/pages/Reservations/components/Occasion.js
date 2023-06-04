import React from "react";
import DropDown from "../../../components/DropDown";

function Occasion(){

    const occasionNames = ["None", "Anniversary", "Birthday", "Other"]

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
                selectedOp={occasionNames[0]}
                colorBtn="hsl(160, 13%, 33%)"
            />
        </div>
    );
};

export default Occasion;