import React from "react";
import { useState } from "react";

function Date(props){

    const styleMain = {
        width: "fit-content",
        display: "flex",
        gap: "1em",
    }

    const styleScroll = {
        "overflow-x": "scroll"
    }

    const DateCard = (p) => {

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
            props.set.setDate(prev => {
                return {...prev, month:p.month, date: p.date}
            })
        }

        return(
            <div
                role="button"
                style={styleCard}
                className={cardColor}
                onClick={handleClick}
            >
                <p>{p.month}</p>
                <h4>{p.date}</h4>
                <p>{p.day}</p>
            </div>
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
        <div>
            <span>
                <h4>Pick a date</h4>
            </span>
            <div style={styleScroll}>
                <div style={styleMain}>
                    {cards}
                </div>
            </div>
        </div>
    );
}

export default Date;