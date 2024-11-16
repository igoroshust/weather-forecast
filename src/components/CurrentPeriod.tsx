import * as React from "react";
import  { useState } from "react";
import axios from "axios";
import { getFiveDaysPeriod, getOneDayPeriod } from "../api/getcoords";
import CurrentCity from "./CurrentCity";
import WeatherCard from "./WeatherCard";

function CurrentPeriod(props) {

    const [period, setPeriod] = React.useState();
    const [weather, setWeather] = React.useState();

    const periodList = [
        { id: '', name: '' },
        { id: 'today', name: "Today" },
        { id: 'fivedays', name: "For 5 days"}
    ]

    const { coords } = props; /* Получение доступа к ПРОПУ coords из ПРОПС компонента */

    const onChange = async (e) => {
        setPeriod(e.target.value) /* Запоминаем период */
        if (!e.target.value) { return }

        if (e.target.value === "today") {
            const resOne = await getOneDayPeriod(coords.latitude, coords.longitude);
            setWeather(resOne.data);
        } else if (e.target.value === "fivedays") {
            const resFive = await getFiveDaysPeriod(coords.latitude, coords.longitude);
            setWeather(resFive.data);
        } else {
            alert('Select period');
        }
    }

    return (
    <>
        <div className="period-selection">
        <label htmlFor="period"><h3>Select period</h3></label>
        <select onChange={ onChange } value={ period }>
         { periodList.map((opt) => <option key={opt.id} value={opt.id}>{ opt.name }</option>)}
        </select>

        { weather && <WeatherCard weatherInfo={ weather } /> }
        </div>
    </>
    );
}

export default CurrentPeriod;