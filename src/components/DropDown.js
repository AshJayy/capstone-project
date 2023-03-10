import React from "react";
import { useState } from "react";
import { ReactComponent as DropIc} from '../assets/icons/chevron.svg'

function DropDown(props){

    const [isActive, setIsActive] = useState(false);

    const optionList = props.options.map((op, i) => {
        return(
            <div
                key={i}
                className="dropdown-item"
                onClick={() => {
                    props.handleClick(op);
                    setIsActive(false)
                }}
            >{op}</div>
        );
    })

    return(
        <div className="dropdown">
            <div className="flex-row">
                <div className="dropdown-selected">
                    {props.selectedOp}
                </div>
                <div className="dropdown-btn" onClick={() => {setIsActive(!isActive);}}>
                    <DropIc width="1em" height="1em" style={{transform: "matrix(0, 1, 1, 0, 0, 0)"}} />
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