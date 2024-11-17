import * as React from "react";
import  { useState } from "react";
import axios from "axios";
import { getFiveDaysPeriod, getOneDayPeriod } from "../api/getcoords";
import CurrentCity from "./CurrentCity";
import CurrentPeriod from "./CurrentPeriod";


function WeatherCard(props) {

    const { weatherInfo, date } = props;
    const { weather } = weatherInfo;
    const { main } = weather[0];
    const { main: mainInfo } = weatherInfo;
    const { temp_min, temp_max, humidity, pressure } = mainInfo;
    const { wind: windInfo } = weatherInfo;
    const { speed } = windInfo;

    const mainImg = {
        Clear: 'https://storage.googleapis.com/a1aa/image/fMu6JSO7MF2qVClmgbJCGqvEJuhWy9XWW5wMB5j9G08mad4JA.jpg',
        Clouds: 'https://storage.googleapis.com/a1aa/image/XXoNTxFI6K7iPJhiBewvo1uAQTeRiNpS6NBueRZ8ie9eoWHeE.jpg',
        Mist: 'https://storage.googleapis.com/a1aa/image/XXoNTxFI6K7iPJhiBewvo1uAQTeRiNpS6NBueRZ8ie9eoWHeE.jpg',
        Thunderstorm: 'https://storage.googleapis.com/a1aa/image/tggkcwFP7bKEP1fXl0rVM096e9kJYbCRk8sUCZI4RmvJ16wTA.jpg.jpg',
        Rain: 'https://storage.googleapis.com/a1aa/image/eYcxFMOmkoXeFEulL6SBBnZCXzCrERSmg5CwRj9eyeOepWHeE.jpg',
        Snow: 'https://storage.googleapis.com/a1aa/image/DKusevpJgE17ECD4FMeEOlXLM5wXlzDN8Vs5JugC7huL16wTA.jpg'
    }

    return (
            <>
                <div className="forecast-item">
                <h4> { date} </h4>
                <div> { main } </div>
                <div> { temp_max }°C / { temp_min }°C </div>
                <div> Wind: { speed } km/h </div>
                <div> Humidity: { humidity }% </div>
                <img alt="Weather icon representing sunny weather" height="100" src={mainImg[main]} width="100"/>
                </div>
            </>
    );
}

export default WeatherCard;