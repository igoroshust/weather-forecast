/* Все компоненты собраны в App.js
App - это верхний уровень и внутри него подгружаются другие компоненты */

import * as React from "react";
import "../styles/App.css";
import CurrentCity from "./CurrentCity";
import CurrentPeriod from "./CurrentPeriod";
import Header from "./Header";

function App () {

    const [city, setCity] = React.useState();
    const [coords, setCoords] = React.useState({
            longitude: '',
            latitude: ''
        });

    const onCoordsChange = (coords) => {
        setCoords(coords);
    }

        return (
            <>
                <Header />
                <CurrentCity onCoordsChange={ onCoordsChange } />
                <CurrentPeriod coords={ coords } />
            </>
        );
}

export default App;

