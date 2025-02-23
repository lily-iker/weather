"use client"

import { useEffect, useState } from "react"
import { WeatherIcon } from "./WeatherIcon"

interface MainWeatherProps {
  city: string
  timezone: string
  temperature: number
  icon: string
}

const MainWeather = ({ city, timezone, temperature, icon }: MainWeatherProps) => {
  const [timeInCity, setTimeInCity] = useState<string>("")

  useEffect(() => {
    const getCityTime = () => {
      if (city) {
        const options: Intl.DateTimeFormatOptions = {
          timeZone: timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }
        const date = new Date()
        const time = new Intl.DateTimeFormat("en-GB", options).format(date)
        setTimeInCity(time)
      }
    }

    getCityTime()

    const interval = setInterval(getCityTime, 1000)

    return () => clearInterval(interval)
  }, [city, timezone])

  return (
    <div className="space-y-4">
      <div className="flex items-start gap-2">
        <h2 className="text-lg md:text-xl font-semibold break-words">{city}</h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly items-center gap-4 sm:gap-8">
        <div className="text-5xl md:text-7xl font-light order-2 sm:order-1">{temperature.toFixed(1)}°</div>
        <div className="flex flex-col items-center order-1 sm:order-2">
          <WeatherIcon icon={icon} size={72} />
          <div className="text-2xl md:text-3xl font-medium mt-2">{timeInCity}</div>
        </div>
      </div>
    </div>
  )
}

export default MainWeather

