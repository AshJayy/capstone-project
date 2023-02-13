import React from "react";
import { useState } from "react";
import { DateTime } from "luxon";

function Date(){

    const DateCard = (props) => {

        const [cardColor, setCardColor] = useState("bg-primary-light primary-dark")

        const styleCard = {
            borderRadius: "16px",
            padding: "0.5em 1em 0.5em 1em",
            width: "fit-content",
            display: "flex",
            flexDirection: "column",
            justifyContene: "center",
            alignItems: "center",
            gap: "0.25em"
        }

        const handleClick = () => {
            cardColor === "bg-primary-light primary-dark" ?
                setCardColor("bg-highlight-light black") :
                setCardColor("bg-primary-light primary-dark")
        }

        return(
            <div
                role="button"
                style={styleCard}
                className={cardColor}
                onClick={handleClick}
            >
                <p>{props.month}</p>
                <h4>{props.date}</h4>
                <p>{props.day}</p>
            </div>
        );
    }

    const currentDate = DateTime.now();

    const cards = [...new Array(7)].map((a, i) => {
            const d = currentDate.plus({days: i});
            return(
                <DateCard
                    key={i}
                    month={d.toLocaleString({month: 'short'})}
                    date={d.toLocaleString({day: 'numeric'})}
                    day={d.toLocaleString({weekday: 'short'})}
                />
            );
        });

        const styleMain = {
            width: "fit-content",
            display: "flex",
            gap: "1em",
        }

        const styleScroll = {
            "overflow-x": "scroll"
        }


    return(
        <div style={styleScroll}>
            <div style={styleMain}>
                {cards}
            </div>
        </div>
    );
}

export default Date;