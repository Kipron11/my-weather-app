import React, {useState} from 'react';
import './App.css';
import Search from "./components/Search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import {WEATHER_API_KEY, WEATHER_API_URL} from "./Data/API/API";
import Forecast from "./components/Forecast/Forecast";

function App() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [currentForecast, setCurrentForecast] = useState(null);

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(' ');

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
        const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

        Promise.all([currentWeatherFetch, forecastWeatherFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forecastResponse = await response[1].json();

                setCurrentWeather({city: searchData.label, ...weatherResponse});
                setCurrentForecast({city: searchData.label, ...forecastResponse});
            })
            .catch((err) => console.log(err))
    }

    console.log(currentWeather);
    console.log(currentForecast);

    return (
        <section className="container">
            <Search onSearchChange={handleOnSearchChange}/>
            {currentWeather && <CurrentWeather data={currentWeather}/>}
            {currentForecast && <Forecast data={currentForecast}/>}
        </section>
    );
}

export default App;
