import * as React from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/Widget.css";
import { getCoordsByCity, getFiveDaysPeriod, getOneDayPeriod } from "../api/getcoords";



function CurrentCity(props) {

    const [city, setCity] = React.useState();
    const [coords, setCoords] = React.useState({
            longitude: '',
            latitude: ''
        });


    const cityList = [
        {id: '', name: ''},
        {id: "Moscow", name: "Москва"},
        {id: "Paris", name: "Париж"}
    ]

    const { onCoordsChange } = props; /* Получение доступа к ПРОПУ onCoordsChange из ПРОПС компонента */

    const onChange = async (e) => {
        setCity(e.target.value);
        if (!e.target.value) { return }
        const res = await getCoordsByCity(e.target.value);
        const longitude = res.data[0].lon;
        const latitude = res.data[0].lat;
        setCoords({ longitude, latitude });
        onCoordsChange({ longitude, latitude });
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