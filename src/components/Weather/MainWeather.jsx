import React, { useState } from 'react';
import '../../App.css';

function MainWeather({ weatherData, weatherImg }) {


    let currDate = new Date();

    const getDay = () => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return daysOfWeek[currDate.getDay()];

    }
    const getDate = () => {
        return currDate.getDate();
    }

    const getMonth = () => {
        const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return monthsOfYear[currDate.getMonth()];
    }


    const getTime = () => {
        let hour = currDate.getHours();
        let minutes = currDate.getMinutes();
        let AmPm = hour >= 12 ? "PM" : "AM";
        hour = hour % 12;
        hour = hour ? hour : 12;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${hour}:${minutes} ${AmPm}`
    }

    return (
        <div className='container First_Section flex justify-around items-center mx-5'>
            <div className="left">
                <div className="left_div">
                    <h2 className='h2'>{weatherData && weatherData.name ? weatherData.name : 'City'}</h2>
                    <div className="D_and_T flex justify-between mb-4">
                        <p>{getDay()}, {getMonth()} {getDate()}</p>
                        <p>Update As Of {getTime()}</p>
                    </div>
                    <div className="weatherCondition grid grid-cols-2 gap-4 p-4 place-items-baseline">
                        <div className="condition flex items-center justify-center gap-1">
                            <span><img src="/Images/barometer.svg" alt="" /></span>
                            <span className='wc'>
                                {weatherData && weatherData.coord ? `Lat ${weatherData.coord.lat}` : 'Lat 44.34'}
                            </span>
                        </div>
                        <div className="condition flex items-center justify-center gap-1">
                            <span><img src="/Images/compass.svg" alt="" /></span>
                            <span className='wc'>
                                {weatherData && weatherData.coord ? `Lon ${weatherData.coord.lon}` : 'Lon 44.34'}
                            </span>
                        </div>
                        <div className="condition flex items-center justify-center gap-1">
                            {/* <span><i className="fa-solid fa-wind p-2"></i></span> */}
                            <span><img src="/Images/wind.svg" alt="" /></span>

                            <span className='wc'>
                                {weatherData && weatherData.wind ? `Wind ${weatherData.wind.speed} km/h` : 'Wind 3 km/h'}
                            </span>
                        </div>
                        <div className="condition flex items-center justify-center gap-1">
                            <span><img src="/Images/sleet.svg" alt="" /></span>
                            <span className='wc'>
                                {weatherData && weatherData.weather ? `${weatherData.weather[0].main}` : 'Rain'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right flex flex-col py-7 px-4 items-center justify-evenly">
                <div className="right_div">
                    <h5>{weatherData && weatherData.weather ? `${weatherData.weather[0].main}` : 'Today'}</h5>
                    <img src={weatherImg} alt="" style={{ height: '100px' }} />
                    <h2 className='h2'>
                        {weatherData && weatherData.main && weatherData.main.temp ? `${weatherData.main.temp}℃` : '23℃'}
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default MainWeather;
