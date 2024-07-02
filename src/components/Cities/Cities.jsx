

import React from 'react'
import cities from '../Flags/cities'

function Cities() {
  return (
    <div className='container Cities_Section flex flex-col items-center justify-center'>
      <div className="heading">
        <h2>Top City Forecast</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
      </div>

      <div className="countries">
        {cities.map((country, i) => {
          return (
            <div key={i} className='country flex flex-col items-center'>
              <img src={country.flag} alt={country.name} />
              <h5 className='mt-2'>{country.name}</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cities
