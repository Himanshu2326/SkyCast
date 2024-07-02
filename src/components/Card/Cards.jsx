

import React from 'react'
import { useState } from 'react';
import { wmoWeatherCodes } from '../WmoCode/WMO_Code';

const Cards = ({ sevenDayForcast }) => {


    const [moveCard, setMoveCard] = useState(0);


    const weeklyWeather = () => {
        if (!sevenDayForcast || !sevenDayForcast.daily) return;

        const { time, temperature_2m_max, temperature_2m_min, wind_speed_10m_max, wind_speed_10m_min, weather_code } = sevenDayForcast.daily;
        if (!time || !temperature_2m_max || !temperature_2m_min || !wind_speed_10m_max || !wind_speed_10m_min || !weather_code) return;

        const weeklyElements = [];

        for (let i = 0; i < 7; i++) {

            const code = weather_code[i];
            const imgPath = wmoWeatherCodes[code]?.img || 'Images/NA.svg';
            const weatherPath = wmoWeatherCodes[code]?.description || 'Not Found';


            weeklyElements.push(
                <div key={i} className="card flex items-center flex-col py-6 justify-center" style={{ transform: `translateX(${moveCard}rem)` }}>
                    <div className="cond">{weatherPath}</div>
                    <img className='weather_image' src={imgPath} alt="" />
                    <div className="Day_and_Time flex gap-2 mb-2">
                        <span className="day">{time[i]}</span>
                    </div>
                    <div className="min_max_temp flex gap-4">
                        <h4 className="Temp minmax_temp">Max: {temperature_2m_max[i]}℃</h4>
                        <h4 className="Temp minmax_temp">Min: {temperature_2m_min[i]}℃</h4>
                    </div>
                    <div className="Air_Rain flex gap-3 items-center my-1">
                        <p><i className="fa-solid fa-wind p-2 pr-2"> </i>Max: {wind_speed_10m_max[i]}km/h</p>
                        <p><i className="fa-solid fa-wind p-2 pr-2"> </i>Min: {wind_speed_10m_min[i]}km/h</p>
                    </div>
                </div>
            );
        }

        return weeklyElements;
    }

    const DemoWeeklyWeather = () => {
        let demoWeeklyElements = []
        for (let i = 0; i < 7; i++) {
            demoWeeklyElements.push(
                <div key={i} className="card flex items-center flex-col py-6 justify-center" style={{ transform: `translateX(${moveCard}rem)` }}>
                    <div className="cond">Today</div>
                    <img src='/Images/NA_Black.svg' alt="" style={{ height: "100px" }} />
                    <div className="Day_and_Time flex gap-2 mb-2">
                        <span className="day">2024-06-29</span>
                    </div>
                    <div className="min_max_temp flex gap-4">
                        <h4 className="Temp minmax_temp">Max:32℃</h4>
                        <h4 className="Temp minmax_temp">Min:23℃</h4>
                    </div>
                    <div className="Air_Rain flex gap-3 items-center my-1">
                        <p><i className="fa-solid fa-wind p-2 pr-2"> </i>Max:7km/h</p>
                        <p><i className="fa-solid fa-wind p-2 pr-2"> </i>Min: 6km/h</p>
                    </div>
                </div>
            )
        }
        return demoWeeklyElements;
    }

    const slideLeft = () => {
        if (moveCard === 0) return;
        setMoveCard(moveCard + 18.5);
    }

    const slideRight = () => {
        if (moveCard === -37) return;
        setMoveCard(moveCard - 18.5);
    }


    return (
        <div className='container my-10'>
            <div className="Divider flex justify-around my-7">
                <div className="text flex items-center">
                    Weekly Forcast
                </div>

                <div className="moveCard flex gap-4">
                    <button onClick={slideLeft} ><i className="fa-solid fa-arrow-left"></i></button>
                    <button onClick={slideRight}><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>

            {/*  ------->  Cards  <------- */}
            <div className="weather_Cards mx-5 flex gap-5">
                {sevenDayForcast && sevenDayForcast.daily ? weeklyWeather() : DemoWeeklyWeather()}
            </div>
        </div>
    )
}

export default Cards
