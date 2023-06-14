import React from "react";
import { useEffect, useMemo, useState} from "react";
import DropDown from "../../../components/DropDown";

function Time(props){

    const dropdownBtn = {
        background: "hsl(150, 6%, 93%)",
        borderRadius: "0px 8px 8px 0px"
    }

    const dropdownSelected = {
        border: "1px solid hsl(150, 6%, 93%)",
        borderRadius: "8px 0px 0px 8px"
    }

    const [current, time, setTime] = [props.current, props.set.time, props.set.setTime];

    const minutes = useMemo(() => ["00", "30"], []);
    const [hOpen, hClosed] = [8, 22]
    var hours = [];

    useEffect(() => {
        var t;
        if(current.hour < hOpen) {
            t = hOpen;
        } else if (current.minute > 30) {
            t = current.hour + 1;
        } else {
            t = current.hour;
        };

        for(t; t <= hClosed; t++) {
            hours.push(""+t);
        }

        console.log(hours);

        setTime(prev => {
            return {...prev, hour : hours[0]}
        })
    }, [current.hour])



    useEffect(() => {
        setTime(prev => {
            return {...prev, min : minutes[0]}
        });
    }, [minutes]);

    const [apClass, setApClass] = useState("toggle down");

    // const AmPm = useMemo(
    //     () => {

    //         const ampmClick = () => {
    //             if(apClass === "toggle down"){
    //                 setApClass("toggle up");
    //                 console.log("up");
    //                 setTime((prev) => {
    //                     return {...prev, ampm: "am"};
    //                 });
    //             }else{
    //                 setApClass("toggle down");
    //                 console.log("down");
    //                 setTime((prev) => {
    //                     return {...prev, ampm: "pm"};
    //                 });
    //             };
    //         };

    //         return(
    //             <div className={apClass} onClick={ampmClick}>
    //                 <div><h4>am</h4></div>
    //                 <div><h4>pm</h4></div>
    //                 <div className="btn"></div>
    //             </div>
    //         );
    //     }
    // , [apClass, setTime]);

    const AmPm = () => {

        const ampmClick = () => {
            if(apClass === "toggle down"){
                setApClass("toggle up");
                console.log("up");
                setTime((prev) => {
                    return {...prev, ampm: "am"};
                });
            }else{
                setApClass("toggle down");
                console.log("down");
                setTime((prev) => {
                    return {...prev, ampm: "pm"};
                });
            };
        };

        return(
            <div className={apClass} onClick={ampmClick}>
                <div><h4>am</h4></div>
                <div><h4>pm</h4></div>
                <div className="btn"></div>
            </div>
        );
    }

    return(
        <div id="time">
            <span>
                <h4>Pick a time</h4>
            </span>
            <div>
                <DropDown
                    options={hours}
                    selectedOp={time.hour}
                    styleBtn = {dropdownBtn}
                    styleSel = {dropdownSelected}
                    handleClick={(hour) => {
                        console.log("drop");
                        setTime(prev => {
                            return {...prev, hour: hour}
                        });
                    }}
                />
                <DropDown
                    options={minutes}
                    selectedOp={time.min}
                    styleBtn = {dropdownBtn}
                    styleSel = {dropdownSelected}
                    handleClick={(min) => {
                        console.log("drop");
                        setTime(prev => {
                            return {...prev, min: min}
                        });
                    }}
                />
                <AmPm />
            </div>
        </div>
    );
}

export default Time;