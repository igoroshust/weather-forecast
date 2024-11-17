import * as React from "react";
import  { useState } from "react";
import axios from "axios";
import { getFiveDaysPeriod, getOneDayPeriod } from "../api/getcoords";
import CurrentCity from "./CurrentCity";

function CurrentPeriod(props) {

    const [period, setPeriod] = React.useState();
    const periodList = [
        { id: '', name: '' },
        { id: 'today', name: "Today" },
        { id: 'fivedays', name: "For 5 days"}
    ]

    const { onPeriodChange, disabled } = props; /* Получение доступа к ПРОПУ из ПРОПС компонента */

    const onChange = (e) => {
        onPeriodChange(e.target.value);
        setPeriod(e.target.value);
    }

    return (
    <>
        <div className="period-selection">
        <label htmlFor="period"><h3>Select period</h3></label>
        <select onChange={ onChange } value={ period } disabled={ disabled }>
         { periodList.map((opt) => <option key={opt.id} value={opt.id}>{ opt.name }</option>)}
        </select>
        </div>
    </>
    );
}

export default CurrentPeriod;

//   { weather && <WeatherCard weatherInfo={ weather } /> }