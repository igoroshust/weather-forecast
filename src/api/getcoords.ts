import { $geocoderApi } from "./axios";

const API_KEY = "3f1bc5548adac751f33f188b7776bcbf";

const getCoordsByCity = (cityName) => {
    return $geocoderApi.get(`direct?q=${cityName}&limit=1&appid=${API_KEY}`)
}

export { getCoordsByCity };