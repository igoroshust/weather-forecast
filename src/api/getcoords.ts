/* Документация к API: https://openweathermap.org/api */

import { $geocoderApi, $weatherApi } from "./axios";
import CurrentCity from "../components/CurrentCity";

// const API_KEY = "3f1bc5548adac751f33f188b7776bcbf";

const getCoordsByCity = (cityName) => {
    return $geocoderApi.get(`direct?q=${cityName}&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
}

const getOneDayPeriod = (lat, lon) => {
    return $weatherApi.get(`weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
}

const getFiveDaysPeriod = (lat, lon) => {
    return $weatherApi.get(`forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric&cnt=40`)
}

export { getCoordsByCity, getFiveDaysPeriod, getOneDayPeriod };