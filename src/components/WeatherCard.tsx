import * as React from "react";
import  { useState } from "react";
import axios from "axios";
import { getFiveDaysPeriod, getOneDayPeriod } from "../api/getcoords";
import CurrentCity from "./CurrentCity";
import CurrentPeriod from "./CurrentPeriod";


function WeatherCard(props) {

//     const { weatherInfo } = props;
//     const { weather } = weatherInfo;
//     const { main } = weather[0];
//     const { main: mainInfo } = weatherInfo;
//     const { temp_min, temp_max, humidity, pressure } = mainInfo;
//     const { wind: windInfo } = weatherInfo;
//     const { speed } = windInfo;
//
//             <div>
//             <div> { temp_max }°C / { temp_min }°C </div>
//             <div> { main } </div>
//             <div> Wind: { speed } km/h </div>
//             <div> Humidity: { humidity }% </div>
//             <div> Pressure: { pressure } mm/Hg. </div>
//             </div>

//     return (
//         <div>
//             <div> ID: { dt } </div>
//             <div> { main } </div>
//             <div> { temp_max }°C / { temp_min }°C </div>
//              <div> Wind: { speed } km/h </div>
//             <div> Humidity: { humidity }% </div>
//         </div>
//     );

    const { weatherInfo } = props;
    const { list } = weatherInfo;
    const { dt } = list[0];
    const { main: mainInfo } = list[1];
    const { temp_min, temp_max, humidity } = mainInfo;
    const { weather: weatherFiveInfo } = list[2];
    const { main } = weatherFiveInfo[0];
    const { wind: windInfo } = list[4];
    const { speed } = windInfo;
    const { dt_text } = list[9];


    return (
    <>
        <h3 className="result">Result: </h3>
    <div className="forecast">
    <div className="forecast-item">
    <img alt="Weather icon representing sunny weather" height="100" src="https://storage.googleapis.com/a1aa/image/fMu6JSO7MF2qVClmgbJCGqvEJuhWy9XWW5wMB5j9G08mad4JA.jpg" width="100"/>
     <h3>{ dt }</h3>
     <p>{ temp_max }°C / { temp_min }°C</p>
     <p>{ main }</p>
     <p>Wind: { speed } km/h</p>
     <p>Humidity: { humidity }%</p>
    </div>
    </div>
    </>
    );
}

export default WeatherCard;

/*
{
   "coord": {
      "lon": 7.367,
      "lat": 45.133
   },
   "weather": [
      {
         "id": 501,
         "main": "Rain",
         "description": "moderate rain",
         "icon": "10d"
      }
   ],
   "base": "stations",
   "main": {
      "temp": 284.2,
      "feels_like": 282.93,
      "temp_min": 283.06,
      "temp_max": 286.82,
      "pressure": 1021,
      "humidity": 60,
      "sea_level": 1021,
      "grnd_level": 910
   },
   "visibility": 10000,
   "wind": {
      "speed": 4.09,
      "deg": 121,
      "gust": 3.47
   },
   "rain": {
      "1h": 2.73
   },
   "clouds": {
      "all": 83
   },
   "dt": 1726660758,
   "sys": {
      "type": 1,
      "id": 6736,
      "country": "IT",
      "sunrise": 1726636384,
      "sunset": 1726680975
   },
   "timezone": 7200,
   "id": 3165523,
   "name": "Province of Turin",
   "cod": 200
}             */