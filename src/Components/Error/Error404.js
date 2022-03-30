import React from 'react'
import ErrorImg from '../../Assets/Sad.png'

const Error404 = () => {
  return (
    <figure className='w-1/2 h-full mx-auto flex flex-col justify-center items-center'>
        <img src={ErrorImg} alt='Error!' loading='lazy' />
        <figcaption className='mt-5 text-center'>Error! Something went bad ... Please, search again.</figcaption>
    </figure>
  )
}

export default Error404