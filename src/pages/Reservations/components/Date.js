import { useState} from "react";
import classNames from "classnames";

function Date(props){

    const styleMain = {
        width: "fit-content",
        display: "flex",
        gap: "1em",
    }

    const styleScroll = {
        overflowX: "scroll",
        scrollMargin: "6em",
    }

    const DateCard = (p) => {

        const [active, setActive] = useState(false);

        console.log("render");

        // const styleCard = {
        //     borderRadius: "16px",
        //     padding: "0.5em 1em 0.5em 1em",
        //     width: "fit-content",
        //     display: "flex",
        //     flexDirection: "column",
        //     justifyContene: "center",
        //     alignItems: "center",
        //     gap: "0.25em"
        // };

        // const cardColor = classNames({
        //     'bg-primary-light': !active,
        //     'primary-dark': !active,
        //     'bg-primary-dark': active,
        //     'primary-light': active
        // });

        const handleClick = () => {
            // if (active) {
            //     setActive(false);
            //     console.log("set false");
            // }else{
            //     setActive(true);
            //     console.log("set true");
            // }
            // (active) ? isActive(false) : isActive(true);
            console.log("1");
            props.set.setDate(prev => {
                return {...prev, month: p.month, date: p.date}
            })
        };

        return(
        <label>
            <input
                type="radio"
                name="date"
            />
            <div className="radio-div-content">
                <p>{p.month}</p>
                <h4>{p.date}</h4>
                <p>{p.day}</p>
            </div>
        </label>
        );
    }

    const cards = [...new Array(7)].map((a, i) => {
            const d = props.current.plus({days: i});
            return(
                <DateCard
                    key={i}
                    month={d.toLocaleString({month: 'short'})}
                    date={d.toLocaleString({day: 'numeric'})}
                    day={d.toLocaleString({weekday: 'short'})}
                />
            );
        });

    return(
        <div id="date">
            <span>
                <h4>Pick a date</h4>
            </span>
            <div className="date-scroll">
                <div style={styleMain}>
                    {cards}
                </div>
            </div>
        </div>
    );
}

export default Date;