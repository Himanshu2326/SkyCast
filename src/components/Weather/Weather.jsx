

import React, { useEffect, useState } from 'react';
import MainWeather from '../Weather/MainWeather';
import Cards from '../Card/Cards';
import TodayWeather from '../Weather/TodayWeather';
import TopCityWeather from './TopCityWeather';
import Cities from '../Cities/Cities';
import Loader from '../Loader/Loader';


function Weather({ city, weatherData, setWeatherData }) {

    const [hourlyWeather, setHourlyWeather] = useState([]);
    const [sevenDayForcast, setSevenDayForcast] = useState([]);
    const [weatherImg, setWeatherImg] = useState('Images/NA.svg');
    const [topCity, setTopCity] = useState([]);
    const [loading, setLoading] = useState(true);


    const Key = String(import.meta.env.VITE_WEATHER_API_KEY)

    //? City API :-- 
    useEffect(() => {
        if (!city) return;
        setLoading(true);
        // let API = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Key}`);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Key}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Location not found');
                }
                return response.json();
            })
            .then((data) => {
                setWeatherData(data);
                setLoading(false);
            })
            .catch((e) => {
                alert('Please Enter a Valid Name', e);
                setLoading(false);
            })
    }, [city]);


    //? 7 Day Forcast :--    
    useEffect(() => {
        if (!weatherData || !weatherData.coord || !weatherData.weather) return;
        setLoading(true);
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData.coord.lat}&longitude=${weatherData.coord.lon}&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_speed_10m_min,weather_code`)
            .then((response) => response.json())
            .then((data) => {
                setSevenDayForcast(data);
                setWeatherImg(`Images/${weatherData.weather[0].main}.svg`)
                setLoading(false);
            })
            .catch((e) => {
                console.error('Error', e);
                setLoading(false);
            })
    }, [city, weatherData])




    //? 3h/Weather :-- 
    useEffect(() => {
        if (!weatherData || !weatherData.coord) return;
        setLoading(true);

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Key}`)
            .then((response) => response.json())
            .then((data) => {
                setHourlyWeather(data);
                setLoading(false);
            })
            .catch((e) => {
                console.error('Error', e);
                setLoading(false);
            })
    }, [city, weatherData])



    //? Top Cities Weather :--

    let cities = ['Africa', 'Italy', 'New York', 'Paris', 'Dubai', 'Singapore'];

    useEffect(() => {
        const fetchWeather = async () => {
        setLoading(true);

            try {
                const responses = await Promise.all(cities.map(city =>
                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Key}`)
                        .then(response => response.json())
                ));
                setTopCity(responses);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                setLoading(false);
            }
        }
        fetchWeather();
    }, [])

    if (loading) {
        return <Loader />;
      }

    return (
        <div className='container flex flex-col justify-center'>
            {weatherData ? (
                <>
                    <MainWeather
                        weatherData={weatherData}
                        weatherImg={weatherImg}
                        setWeatherImg={setWeatherImg}
                    />
                    <Cards
                        weatherData={weatherData}
                        sevenDayForcast={sevenDayForcast}
                    />
                    <TopCityWeather
                        topCity={topCity}
                        weatherImg={weatherImg}
                    />
                    <TodayWeather
                        weatherData={weatherData}
                        hourlyWeather={hourlyWeather}
                        weatherImg={weatherImg}
                    />
                    <Cities />

                </>
            ) : (
                <div>
                <Loader/>
                </div>
            )}


        </div>
    )
}

export default Weather;
