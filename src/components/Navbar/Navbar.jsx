

import React, { useState } from 'react'

function Navbar({ city, setCity }) {

    const [cityValue, setCityValue] = useState('');

    const handleCityChange = () => {
        setCity(cityValue);
    }

    const CityValue = (e) => {
        setCityValue(e.target.value)
    }

    return (

        <div className='navbar flex items-center justify-between my-6 '>

            {/* -----> Logo  <----  */}
            <div className="logo flex items-center">
                <img className='px-2' src="Images/night.png" alt="" style={{ height: "35px" }} />
                <a href="#">Sky<span className='span_C'>C</span>ast</a>
            </div>

            {/* -----> Links  <----  */}
            <div className="links flex">
                <ul className='flex items-center'>
                    <li className='px-7'><a href="#">Home</a></li>
                    <li className='px-7'><a href="#">News</a></li>
                    <li className='px-7'><a href="#">Contact</a></li>
                </ul>
            </div>

            {/* -----> Search Bar  <----  */}
            <div className='search'>
                <input
                    type="search"
                    className='inp_search'
                    name="search"
                    id="search"
                    onChange={CityValue}
                    value={cityValue}
                    autoComplete='off'
                    placeholder='Enter Your City'
                />
                <span className='btn' onClick={handleCityChange}>Search</span>
                {/* <button className='loction-btn'><i className="fa-solid fa-location-dot"></i></button> */}
            </div>

        </div>
    )
}

export default Navbar
