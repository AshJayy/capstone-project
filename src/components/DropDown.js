import React from "react";
import { useState } from "react";
import { ReactComponent as DropIc} from '../assets/icons/chevron.svg'

function DropDown(props){

    //props: options, handleClick, styles - styleSel, styleBtn, colorBtn, selectedOp

    const [isActive, setIsActive] = useState(false);

    const optionList = props.options.map((op, i) => {
        // add styles for dropdown-items in an extrenal css
        return(
            <div
                key={i}
                className="dropdown-item"
                onClick={() => {
                    console.log("active");
                    props.handleClick(op);
                    setIsActive(false);
                }}
            >{op}</div>
        );
    })

    const styleIcon = {
        color: props.colorBtn,
        transform: "matrix(0, 1, 1, 0, 0, 0)"
    }

    return(
        <div className="dropdown">
            <div className="flex-row">
                <div className="dropdown-selected" style={props.styleSel}>
                    {props.selectedOp}
                </div>
                <div
                    className="dropdown-btn"
                    style={props.styleBtn}
                    onClick={() => {setIsActive(!isActive);
                    console.log("set active");}}
                >
                    <DropIc width="1em" height="1em" fill={props.colorBtn} style={styleIcon} />
                </div>
            </div>
            {isActive && (
                <div className="dropdown-cnt">
                    {optionList}
                </div>
            )}
        </div>
    );
}

export default DropDown;