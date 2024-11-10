/* Все компоненты собраны в App.js
App - это верхний уровень и внутри него подгружаются другие компоненты */

import * as React from "react";
import "../styles/App.css";
// import Main from "./Main";
import CurrentCity from "./CurrentCity";
import Header from "./Header";

function App () {

        return (
            <>
                <Header />
                <CurrentCity />
            </>
        );
}

export default App;

