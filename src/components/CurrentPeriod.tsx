import * as React from "react";
import  { useState } from "react";
import axios from "axios";
import { getFiveDaysPeriod, getOneDayPeriod } from "../api/getcoords";
import CurrentCity from "./CurrentCity";

function CurrentPeriod() {
    const [period, setPeriod ] = React.useState();

    const [chooseList, setChooseList] = React.useState({
        today: '',
        fivedays: ''
    });

    const periodList = [
        { id: 'today', name: "Сегодня" },
        { id: 'fivedays', name: "На пять дней"}
    ]

    const onChange =  (e) => {
        setPeriod(e);
    }

    return (
    <>
    </>
    );
}

export default CurrentPeriod;