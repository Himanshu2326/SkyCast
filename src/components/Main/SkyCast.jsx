

import React, { useState } from 'react'
import Weather from '../Weather/Weather';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function SkyCast() {

    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState([]);

    return (
        <div>
            <Navbar city={city} setCity={setCity} />
            <div className="weather-container">
                <Weather city={city} weatherData={weatherData} setWeatherData={setWeatherData} />
            </div>
            <Footer />
        </div>
    )
}

export default SkyCast;
