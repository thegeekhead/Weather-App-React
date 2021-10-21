import React, { useState } from "react";
import Conditions from "../Conditions/Conditions";
import classes from "./Forecast.module.css";

const Forecast = () => {
    let [city, setCity] = useState('');;
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});
    const uriEncodedCity = encodeURIComponent(city);
    function getForecast(e) {
        e.preventDefault();

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${uriEncodedCity}&units=${unit}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "YOUR_API"
            }
        })
            .then(response => response.json())
            .then(response =>
                setResponseObj(response))
            .then(response => { console.log(response) }
            )
            .catch(err => {
                console.log(err)
            });
        // weather data fetch function will go here.
    }
    return (
        <div>
            <h2>Find Current weather conditions.</h2>
            <div>
                {JSON.stringify(responseObj)}
            </div>

            <form onSubmit={getForecast}>

                <input
                    type="text"
                    placeholder="Enter city"
                    maxLength="50"
                    className={classes.textInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    Farenheit
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    Celcius
                </label>

                <button className={classes.Button} type="submit">Get Forecast</button>
            </form>

            <Conditions
                responseObj={responseObj}
            />
        </div>
        // jsx code will go here.
    )
}
export default Forecast;
