import React from 'react';
import { weatherContext } from '../../context/weatherContext';

export default function Display() {

  const {weather} = weatherContext();

  return (
    <>
      {typeof weather.main === 'undefined' ? null : (

        <div className='w-60 h-96 rounded-xl flex flex-col justify-start  items-center shadow-xl overflow-hidden relative
        bg-sky-image bg-cover bg-no-repeat bg-left
        '>
          
          <span className='w-full h-24 flex justify-evenly items-center text-3xl p-3 text-white'>
            {weather.length < 1 ? null : (<>
              <p>{weather.name},</p>
              <p>{weather.sys.country}</p> 
            </>)}            
          </span>

          <span className='w-44 h-1/2 flex flex-col justify-center items-center relative bg-white/10 backdrop-blur-md rounded-xl
          '>
            <p className='text-5xl text-center h-1/2'>{weather.main.temp}°</p>
            <span className='w-full flex justify-evenly items-center text-2xl '>
              <p>{weather.main.temp_min}°</p>
              <p>{weather.main.temp_max}°</p>
            </span>
          </span>

          <span className='w-full h-8 flex justify-center items-center absolute     bottom-0 p-5 text-white text-xl 
            bg-gradient-to-b from-orange-400 to-orange-500
          '>
            <p>{weather.weather[0].main}</p>
          </span>
        </div>    
      )}
    </>      
  )
}
