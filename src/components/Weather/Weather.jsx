/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import weather from '../../assets/images/weather.webp'

function Weather() {
  const [value, setValues] = useState([])
  const refValue = useRef(null)

  const search = async city => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9b5c1ea0b441380df442d996d9c8a51b`
      const response = await fetch(url)
      const data = await response.json()
      setValues({
        city: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        speed: data.wind.speed,
      })
    } catch (error) {
      console.error(error.message)
    }
  }
  const getTemperature = e => {
    e.preventDefault()
    if (refValue.current.value === '') {
      alert('Enter your city name')
    } else {
      search(refValue.current.value)
      refValue.current.value = ''
    }
  }

  return (
    <div>
      <div className="shadow-md shadow-green-500 w-fit mx-auto p-4 rounded-md mt-5">
        {/* search bar */}
        <div>
          <input
            type="text"
            placeholder="Search city"
            className="shadow-sm focus:shadow-md focus:shadow-sky-400 shadow-orange-600 rounded-lg px-2 py-1 border border-dashed focus:outline-dashed font-semibold text-lg font-sans"
            ref={refValue}
          />
          <motion.button
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
            type="button"
            className="bg-sky-600 border-0 outline-0 shadow-md shadow-red-300 rounded-md px-4 py-2 text-white ml-3 hover:bg-sky-400 hover:text-black transition-all duration-300"
            onClick={getTemperature}
          >
            search
          </motion.button>
        </div>
        {/* details */}
        <div>
          <img src={weather} alt="weather" className="h-[220px] w-full " />
          <h1 className="text-center text-2xl font-semibold">
            {value.temperature} °C
          </h1>
          <h1 className="text-center text-2xl font-semibold">
            city: {value.city}
          </h1>
        </div>
        <div className="flex justify-around items-center mt-5">
          <div className="shadow-md shadow-purple-400 p-4 rounded-md text-center">
            <h1>{value.humidity} %</h1>
            <h1>Humidity</h1>
          </div>
          <div className="shadow-md shadow-purple-400 p-4 rounded-md text-center">
            <h1>{value.speed} km/h</h1>
            <h1>Wind speed</h1>
          </div>
        </div>
        {/* details end */}
      </div>
    </div>
  )
}

export default Weather
