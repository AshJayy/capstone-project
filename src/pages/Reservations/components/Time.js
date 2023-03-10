import React from "react";
import { useEffect, useMemo} from "react";
import DropDown from "../../../components/DropDown";

function Time(props){

    const [current, time, setTime] = [props.current, props.set.time, props.set.setTime];

    const minutes = useMemo(() => ["00", "30"], []);
    const [hOpen, hClosed] = [8, 22]
    var hours = [];

    useEffect(() => {
        hours = [];
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

        setTime(prev => {
            return {...prev, hour : hours[0]}
        })
    }, [current.hour])

    useEffect(() => {
        setTime(prev => {
            return {...prev, min : minutes[0]}
        });
    }, [minutes]);


    return(
        <div id="time">
            <span>
                <h4>Pick a time</h4>
            </span>
            <div>
                <DropDown
                    options={minutes}
                    selectedOp={time.min}
                    handleClick={(min) => {
                        setTime(prev => {
                            return {...prev, min: min}
                        });
                    }}
                />
                <DropDown
                    options={hours}
                    selectedOp={time.hour}
                    handleClick={(hour) => {
                        setTime(prev => {
                            return {...prev, hour: hour}
                        });
                    }}
                />
            </div>
        </div>
    );
}

export default Time;