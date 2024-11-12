import * as React from "react";
import  { useState } from "react";
import axios from "axios";
import "../styles/Widget.css";
import { getCoordsByCity } from "../api/getcoords";


function CurrentCity() {
    const [city, setCity] = React.useState();
//     const [longitude, setLongitude] = React.useState();
//     const [latitude, setLatitude] = React.useState();

    const [coords, setCoords] = React.useState({
        longitude: '',
        latitude: ''
    });

    const cityList = [
        {id: "Moscow", name: "Москва"},
        {id: "Paris", name: "Париж"}
    ]

    const onChange = async (e) => {
        setCity(e.target.value);
        const res = await getCoordsByCity(e.target.value);
        const longitude = res.data[0].lon;
        const latitude = res.data[0].lat;
        setCoords({ longitude, latitude });
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