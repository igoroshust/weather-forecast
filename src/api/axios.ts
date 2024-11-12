import axios from "axios";

const $weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

const $geocoderApi = axios.create({
  baseURL: 'http://api.openweathermap.org/geo/1.0/',
})

export { $weatherApi, $geocoderApi };

// Получить координаты по городу
// Получить погоду по координатам