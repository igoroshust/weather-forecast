import * as React from "react";
import  { useState } from "react";
import axios from "axios";
import "../styles/Widget.css";


function CurrentCity() {
    const [city, setCity] = React.useState();
    const [longitude, setLongitude] = React.useState();
    const [latitude, setLatitude] = React.useState();
    const cityList = [
        {id: "Moscow", name: "Москва"},
        {id: "Paris", name: "Париж"}
    ]

    const onChange = (e) => {
        setCity(e.target.value);
    }

    return (
    <>
        <h3>Выберите город</h3>
        <select onChange={ onChange } value={ city }>
            { cityList.map((opt) => <option key={opt.id} value={opt.id}>{ opt.name }</option>)}
        </select>
    </>
    );
};

export default CurrentCity;