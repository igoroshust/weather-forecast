/* Все компоненты собраны в App.js
App - это верхний уровень и внутри него подгружаются другие компоненты */

import * as React from "react";
import { useEffect } from "react";
import "../styles/App.css";
import CurrentCity from "./CurrentCity";
import CurrentPeriod from "./CurrentPeriod";
import Header from "./Header";
import WeatherCard from "./WeatherCard";
import { getFiveDaysPeriod, getOneDayPeriod } from "../api/getcoords";
import { uniqBy } from 'lodash';

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
            const uniqueDays = uniqBy(resFive.data.list, (day) => day.dt_txt.slice(0, 10))
            setWeather(uniqueDays.slice(0, 5));
        } else {
            alert('Select period');
        }
    }

    const getDay = (date) => {
        const d = new Date(date);
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[d.getDay()];
    }

        return (
            <>
                <Header />
                <div className="main">
                <CurrentCity onCoordsChange={ onCoordsChange } />
                <CurrentPeriod disabled={ !hasCoords } onPeriodChange={ onPeriodChange }/>
                { !!weather.length && <h3 className="result">Result: </h3> }
                <div className="cardContainer">
                { isOneDay && weather[0] && <WeatherCard weatherInfo={ weather[0] } date='Today' /> }
                { isFiveDay && weather.map((weatherItem) => <WeatherCard weatherInfo={ weatherItem } date={ getDay(weatherItem.dt_txt) } />)}
                </div>
                </div>
            </>
        );
}

export default App;

