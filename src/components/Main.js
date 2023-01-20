import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Reservations from "./Reservations";

import './Main.css'

function Main(){
    return(
        <>
            <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Reservations" element={<Reservations />} />
            </Routes>
            </main>
        </>
    );
}

export default Main;