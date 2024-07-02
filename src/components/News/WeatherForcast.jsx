

import React from 'react'

function WeatherForcast({ newsInfo }) {

    const setNews = () => {
        if (!newsInfo || !newsInfo.articles) return null;

        return newsInfo.articles.slice(0, 3).map((article, index) => (
            <div key={index} className="news_card flex flex-col items-center">
                <div className="image">
                    <img
                        src={article.urlToImage || "https://wecast.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fforecust1.d35a9ea3.png&w=384&q=75"}
                        alt="Img"
                    />
                </div>
                <div className="text flex flex-col">
                    <p>{article.author || 'John Doe'}</p>
                    <h5>{article.title || 'One of the daily rituals I often find myself doing'}</h5>
                    <a href={article.url || "#"} target='_blank'>Read More</a>
                </div>
            </div>
        ));
    };

    return (
        <div className='weatherForcast flex flex-col items-center py-12 mt-7 max-w-full'>
            <div className="heading my-5">
                <h2>Weather Forecast News</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>

            <div className="weatherCards my-6 flex items-center gap-4">
                {setNews()}
            </div>

        </div>
    )
}

export default WeatherForcast
