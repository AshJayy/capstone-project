import React from "react";
import { useState, useEffect } from "react";
import { ReactComponent as Chevron} from '../assets/icons/chevron.svg';

function SpecialsCard() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu_items.json')
        .then(response => response.json())
        .then(data => setMenu(data.menuItems))
        .catch(error => console.error(error));
    }, [])

    const cards = menu.filter(item => {
        return item.special;
    })
    .map(spItem => {
        return (
            <article key={spItem.itemCode} className="special-card bg-primary-light">
                <img src={spItem.img} alt={spItem.itemName} />
                <div>
                    <div>
                        <h4>{spItem.itemName}</h4>
                        <h4>{spItem.price}$</h4>
                    </div>
                    <div>
                        <p>{spItem.description}</p>
                    </div>
                    <div>
                        <h5>Order a delivery</h5>
                        <Chevron width="1em" height="1em" />
                    </div>
                </div>
            </article>
        );
    })

    return (
        <div>
            {cards}
        </div>
    );
}

export default SpecialsCard;