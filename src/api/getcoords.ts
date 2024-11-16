/* https://openweathermap.org/api */

import { $geocoderApi, $weatherApi } from "./axios";
import CurrentCity from "../components/CurrentCity";

const API_KEY = "3f1bc5548adac751f33f188b7776bcbf";

const getCoordsByCity = (cityName) => {
    return $geocoderApi.get(`direct?q=${cityName}&limit=1&appid=${API_KEY}`)
}

const getOneDayPeriod = (lat, lon) => {
    return $weatherApi.get(`weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
}

const getFiveDaysPeriod = (lat, lon) => {
    return $weatherApi.get(`forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&cnt=40`)
}

export { getCoordsByCity, getFiveDaysPeriod, getOneDayPeriod };