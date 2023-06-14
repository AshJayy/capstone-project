import { useMemo} from "react";

function Date(props){

    const styleMain = {
        width: "fit-content",
        display: "flex",
        gap: "1em",
    }

    const DateCard = (p) => {

        console.log("render");

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

    const cards = useMemo(() => [...new Array(7)].map((a, i) => {
        const d = props.current.plus({days: i});
        return(
            <DateCard
                key={i}
                month={d.toLocaleString({month: 'short'})}
                date={d.toLocaleString({day: 'numeric'})}
                day={d.toLocaleString({weekday: 'short'})}
            />
        );
    }), [])


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