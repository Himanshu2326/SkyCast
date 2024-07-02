

import React from 'react'

function TopCityWeather({ topCity }) {

    const mapCity = () => {
        if (!topCity || !Array.isArray(topCity)) return null;
        let arr = [];

        topCity.map((val, i) => {
            arr.push(
                <div key={i} className="city flex flex-col items-start text-white" style={{ background: `url(./Images/${i + 1}.webp) center center/cover` }}>
                    <img src={val && val.weather[0] ? `Images/${val.weather[0].main}.svg` : "/Images/NA.svg"} alt="" />
                    <div className="loc">{val.name || 'City Name'}</div>
                    <div className="temp">{val.main ? `${val.main.temp}` : "N/A"}℃</div>
                </div>
            )
        })
        return arr;
    }

    return (
        <div>

            <div className="container Top_City_Weather flex items-center justify-end ">
                <div className="Heading px-7">
                    <h2>Top City Weather</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>

                <div className="Top_Cites flex gap-4">
                    {mapCity()}
                </div>
            </div>

        </div>
    )
}

export default TopCityWeather;
