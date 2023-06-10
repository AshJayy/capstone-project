import React from "react";
import { useState} from "react";
import './Details.css';

function Details(props) {

    const [details, setDetails] = useState(false)

    const [name, setName] = useState({
        value: "",
        isTouched: false
    });
    const [email,setEmail] = useState({
        value: "",
        isTouched: false
    });
    const [phone, setPhone] = useState({
        value: "",
        isTouched: false
    });

    const errorStyle = {
        fontSize: "12px",
        color: "red",
    };

    const EmptyErrorMessage = (props) => {
        return(
            <p style={errorStyle}>{props.val} cannot be empty</p>
        );
    }

    const EnterEitherErrorMessage = (props) => {
        return(
            <p style={errorStyle}>You should enter at least one of {props.val1} or {props.val2}</p>
        );
    }

    const checkEmpty = () => {
        if((name.value !== "" && (email.value !== "" || phone.value !== ""))) {setDetails(true)}
    }

    return(
        <div id="details" className="bg-white">
            <h3>Enter Your Details</h3>
            <div id="details-input">
                <div>
                    <lable for="name"><p>Name</p></lable>
                    <input
                        name="name"
                        type="text"
                        value={name.value}
                        onChange={e => setName({...name, value: e.target.value})}
                        onBlur={() => {
                            setName({...name, isTouched: true});
                            checkEmpty();
                        }}
                    ></input>
                    {name.isTouched && name.value.length < 1 ? (
                        <EmptyErrorMessage val="Name" />
                    ) : null}
                </div>
                <div>
                    <lable for="email"><p>Email address</p></lable>
                    <input
                        name="email"
                        type="text"
                        value={email.value}
                        onChange={e => setEmail({...email, value: e.target.value})}
                        onBlur={() => {
                            setEmail({...email, isTouched: true});
                            checkEmpty();
                        }}
                    ></input>
                </div>
                <div>
                    <lable for="phone"><p>Phone</p></lable>
                    <input
                        name="phone"
                        type="text"
                        value={phone.value}
                        onChange={e => setPhone({...phone, value: e.target.value})}
                        onBlur={() => {
                            setPhone({...phone, isTouched: true});
                            checkEmpty();
                        }}
                    ></input>
                    {phone.isTouched &&
                    phone.value.length < 1 &&
                    email.isTouched &&
                    email.value.length < 1 ? <EnterEitherErrorMessage val2="Email" val1="Phone" /> : null}
                </div>
                <button disabled={!props.specif && !details}><h3>Book now</h3></button>
            </div>
        </div>
    );
}

export default Details;