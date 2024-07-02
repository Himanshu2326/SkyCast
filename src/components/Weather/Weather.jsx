

import React, { useEffect, useState } from 'react';
import MainWeather from '../Weather/MainWeather';
import Cards from '../Card/Cards';
import TodayWeather from '../Weather/TodayWeather';
import TopCityWeather from './TopCityWeather';
import Cities from '../Cities/Cities';
import WeatherForcast from '../News/WeatherForcast';


function Weather({ city, weatherData, setWeatherData }) {

    const [hourlyWeather, setHourlyWeather] = useState([]);
    const [sevenDayForcast, setSevenDayForcast] = useState([]);
    const [weatherImg, setWeatherImg] = useState('Images/NA.svg');
    const [topCity, setTopCity] = useState([]);
    const [newsInfo, setNewsInfo] = useState([])


    let Key = '73c604d1c335623b5f574390a02b4485';

    //? City API :-- 
    useEffect(() => {
        if (!city) return;
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
            })
            .catch((e) => {
                alert('Please Enter a Valid Name', e)
            })
    }, [city]);


    //? 7 Day Forcast :--    
    useEffect(() => {
        if (!weatherData || !weatherData.coord || !weatherData.weather) return;
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${weatherData.coord.lat}&longitude=${weatherData.coord.lon}&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_speed_10m_min,weather_code`)
            .then((response) => response.json())
            .then((data) => {
                setSevenDayForcast(data);
                setWeatherImg(`Images/${weatherData.weather[0].main}.svg`)

            })
            .catch((e) => {
                console.error('Error', e)
            })
    }, [city, weatherData])




    //? 3h/Weather :-- 
    useEffect(() => {
        if (!weatherData || !weatherData.coord) return;

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Key}`)
            .then((response) => response.json())
            .then((data) => {
                setHourlyWeather(data)
            })
            .catch((e) => {
                console.error('Error', e)
            })
    }, [city, weatherData])



    //? Top Cities Weather :--

    let cities = ['Africa', 'Italy', 'New York', 'Paris', 'Dubai', 'Singapore'];

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const responses = await Promise.all(cities.map(city =>
                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Key}`)
                        .then(response => response.json())
                ));
                setTopCity(responses);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }
        fetchWeather();
    }, [])



    //? News Api :---

    useEffect(() => {

        const fetchNews = () => {
            fetch(`https://newsapi.org/v2/everything?q=weather&apiKey=a7d92bf8bfcb4742a41d04a714120a9a`)
                .then((res) => res.json())
                .then((data) => {
                    setNewsInfo(data)
                })
                .catch((e) => {
                    console.log(`Error`, e);
                })
        }
        fetchNews()
    }, [])
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
                    <WeatherForcast
                        newsInfo={newsInfo}
                    />
                </>
            ) : (
                <div>Loading...</div>
            )}


        </div>
    )
}

export default Weather;
