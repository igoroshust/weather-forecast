import * as React from "react";
import  { useState } from "react";
import axios from "axios";
import "../styles/Widget.css";


function Current() {
    const [weather, setWeather] = React.useState([]);

    if(!weather.length) {
        axios.get("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=3f1bc5548adac751f33f188b7776bcbf").then(res => {
            console.log(res);
         })
    }
    return (
        <h1>Hello</h1>

    );
};

export default Current;