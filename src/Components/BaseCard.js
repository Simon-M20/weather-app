import React from 'react'
import BaseImg from '../Assets/ForecastWeather.svg'

const BaseCard = () => {
  return (
    <figure className='w-1/2 flex justify-center items-center mx-auto h-full'>
        <img src={BaseImg} alt='Weather App' loading='lazy' />
    </figure>
  )
}

export default BaseCard;