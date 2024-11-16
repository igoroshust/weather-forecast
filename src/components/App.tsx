/* Все компоненты собраны в App.js
App - это верхний уровень и внутри него подгружаются другие компоненты */

import * as React from "react";
import "../styles/App.css";
import CurrentCity from "./CurrentCity";
import CurrentPeriod from "./CurrentPeriod";
import Header from "./Header";
import WeatherCard from "./WeatherCard";
import { getFiveDaysPeriod, getOneDayPeriod } from "../api/getcoords";

function App () {

    const [city, setCity] = React.useState();
    const [period, setPeriod] = React.useState();
    const [weather, setWeather] = React.useState([]);
    const [coords, setCoords] = React.useState({
            longitude: '',
            latitude: ''
        });

    const isOneDay = React.useMemo(() => {
        return period && period === 'today'
    }, [period])

    const isFiveDay = React.useMemo(() => {
        return period && period === 'fivedays'
    }, [period])

    const hasCoords = React.useMemo(() => {
        return !!coords.longitude && !!coords.latitude;
    }, [coords])

    const onCoordsChange = (coords) => {
        setCoords(coords);
    }

    const onPeriodChange = async (value) => {
        setPeriod(value) /* Запоминаем период */
        if (!value) { return }

        if (value === "today") {
            const resOne = await getOneDayPeriod(coords.latitude, coords.longitude);
            console.log([resOne.data]);
            setWeather([resOne.data]);
        } else if (value === "fivedays") {
            const resFive = await getFiveDaysPeriod(coords.latitude, coords.longitude);
            setWeather(resFive.data.list);
        } else {
            alert('Select period');
        }
    }

        return (
            <>
                <Header />
                <div className="main">
                <CurrentCity onCoordsChange={ onCoordsChange } />
                <CurrentPeriod disabled={ !hasCoords } onPeriodChange={ onPeriodChange }/>
                { !!weather.length && <h3 className="result">Result: </h3> }
                <div className="cardContainer">
                { isOneDay && weather[0] && <WeatherCard weatherInfo={ weather[0] } date='today'/> }
                { isFiveDay && weather.map((weatherItem) => <WeatherCard weatherInfo={weatherItem} date={ weatherItem.dt_text } />)}
                </div>
                </div>
            </>
        );
}

export default App;

