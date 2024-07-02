

import React from 'react'

function TodayWeather({ weatherData, hourlyWeather, weatherImg }) {


    //? Format Time :-- 
    const formatTime = (time) => {
        const date = new Date(time * 1000); // Convert UNIX timestamp to milliseconds
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${hours}:${minutes}${ampm}`;
    }


    //? Set Timely Weather :-- 
    const hourlyWeatherfunc = () => {
        if (!hourlyWeather || !hourlyWeather.list) return;

        const hourlyElements = [];

        for (let i = 0; i < 5; i++) {
            let fullTime = String(hourlyWeather.list[i].dt_txt);
            let checkAmPm = Number(fullTime.slice(11, 13));
            let ampm = checkAmPm >= 12 ? "PM" : "AM";
            let time = fullTime.slice(11, 16);

            hourlyElements.push(
                <div key={i} className="hourCondition py-1 px-2 flex flex-col justify-start">
                    <p>{Math.round(hourlyWeather.list[i].main.temp - 273)}℃</p>
                    <p>{time + ampm}</p>
                    <p>{hourlyWeather.list[i].weather[0].description}</p>
                </div>
            );
        }

        return hourlyElements;
    }


    return (

        <div className='container TodayWeather my-12 flex flex-col justify-center items-center py-12 text-white'>

            {/* ------------------------------  Heading  ---------------------------------- */}
            <div className="heading flex justify-center items-center flex-col my-7">
                <h2>Today Weather Details</h2>
                <p>Lorem ipsum dolor, sit amet. Obcaecati esse autem iure magni debitis tenetur?</p>
            </div>


            {/* ------------------------------  Full Weather  ---------------------------------- */}
            <div className="weather_Container flex gap-4 items-center">

                <div className="Left-Center">
                    {/* ------------------------------  Left  ---------------------------------- */}
                    <div className="left">
                        <div className="leftTop flex gap-4">
                            <div className="sunrise">
                                <h6>Sunrise</h6>
                                <h5>{weatherData && weatherData.sys ? formatTime(weatherData.sys.sunrise) : "6:42AM"}</h5>
                            </div>
                            <div className="sunset">
                                <h6>Sunset</h6>
                                <h5>{weatherData && weatherData.sys ? formatTime(weatherData.sys.sunset) : "7:02PM"}</h5>

                            </div>
                        </div>
                        <div className="Wind_Rain grid grid-cols-2 gap-4 p-4 my-3 place-items-baseline">
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

                <div className="Right">

                    {/* ------------------------------  Center  ---------------------------------- */}
                    <div className="center flex flex-col py-7 px-4 items-center">
                        <h5>{weatherData && weatherData.weather ? `${weatherData.weather[0].main}` : 'Today'}</h5>
                        <img src={weatherImg} alt="" style={{ height: '100px' }} />
                        <h2 className='h2'>
                            {weatherData && weatherData.main && weatherData.main.temp ? `${weatherData.main.temp}℃` : '23℃'}
                        </h2>
                    </div>



                    {/* ------------------------------  Right  ---------------------------------- */}
                    <div className="Today_right flex flex-col py-5 px-5 justify-between">
                        <div className="top my-2 mx-2">
                            <h4>{weatherData && weatherData.main && weatherData.main.temp ? `${weatherData.main.temp}℃` : '23℃'}</h4>
                        </div>
                        <div className="middle flex my-2 mx-2">
                            {hourlyWeatherfunc()}
                        </div>
                        <div className="bottom my-2 mx-2">
                            <p>News Update <span><i className="fa-solid fa-arrow-right"></i></span></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TodayWeather;
