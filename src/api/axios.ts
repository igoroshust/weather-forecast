import axios from "axios";

/* Отображение погоды на один/пять дней */
const $weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

/* Получение координат выбраного города */
const $geocoderApi = axios.create({
  baseURL: 'http://api.openweathermap.org/geo/1.0/',
})

export { $weatherApi, $geocoderApi };