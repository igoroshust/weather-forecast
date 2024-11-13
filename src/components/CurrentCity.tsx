import * as React from "react";
import  { useState } from "react";
import axios from "axios";
import "../styles/Widget.css";
import { getCoordsByCity, getFiveDaysPeriod, getOneDayPeriod } from "../api/getcoords";



function CurrentCity() {

    const [city, setCity] = React.useState();

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

/* CURRENT PERIOD */
    const [period, setPeriod ] = React.useState();

    const [chooseList, setChooseList] = React.useState({
        today: '',
        fivedays: ''
    });

    const periodList = [
        { id: 'today', name: "Сегодня" },
        { id: 'fivedays', name: "На пять дней"}
    ]

    const onChange1 = async (e) => {
        setPeriod(e.target.value) /* Запоминаем период */
        const resOne = await getOneDayPeriod(coords.longitude, coords.latitude);
        // const resFive = await getFiveDaysPeriod(coords.longitude, coords.latitude);
    }

    return (
    <>
        <h3>Выберите город</h3>
        <select onChange={ onChange } value={ city }>
        <option selected>------</option>
            { cityList.map((opt) => <option key={opt.id} value={opt.id}>{ opt.name }</option>)}
        </select>

          <h3>Выберите период</h3>
        <select onChange={ onChange1 } value={ period }>
        <option selected>------</option>
            { periodList.map((opt) => <option key={opt.id} value={opt.id}>{ opt.name }</option>)}
        </select>
    </>
    );
};

export default CurrentCity;