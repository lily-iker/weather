import { useEffect, useState } from 'react'
import { WeatherIcon } from './WeatherIcon'
import type { WeatherApiResponse } from '../types/weather'
import { Wind, Gauge, Eye, Droplets, Thermometer, Sunrise, Sunset } from 'lucide-react'

interface CurrentWeatherProps {
  data: WeatherApiResponse | null
}

export const CurrentWeather = ({ data }: CurrentWeatherProps) => {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    if (!data) return

    const updateTime = () => {
      const date = new Date()
      setTime(
        date.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [data])

  if (!data) {
    return (
      <div className="text-center py-12 px-4 bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-sm">
        <div className="w-20 h-20 mx-auto mb-4 text-yellow-400">
          <WeatherIcon code={1000} size={80} /> {/* Clear sky icon */}
        </div>
        <p className="text-gray-600 text-lg">Search for a city to see weather information</p>
      </div>
    )
  }

  const current = data.current
  const location = data.location
  const today = data.forecast.forecastday[0]

  return (
    <div className="space-y-6">
      {/* Location Header */}
      <div className="text-center sm:text-left">
        <h2 className="text-3xl sm:text-3xl font-bold text-gray-800">
          {location.name}
          {location.country && <span className="text-gray-500 text-sm"> , {location.country}</span>}
        </h2>
      </div>

      {/* Main Weather Card - Compact Version */}
      <div className="bg-linear-to-br from-teal-400 to-blue-400 rounded-2xl p-4 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Temperature & Condition */}
          <div className="text-center sm:text-left">
            <div className="text-5xl sm:text-5xl font-light leading-none">
              {current.temp_c.toFixed(1)}°
            </div>
            <p className="text-base sm:text-lg mt-1 text-blue-100 capitalize">
              {current.condition.text}
            </p>
          </div>

          {/* Weather Icon & Time */}
          <div className="flex flex-col items-center">
            <WeatherIcon code={current.condition.code} size={60} />
            <div className="mt-2 text-sm bg-white/20 backdrop-blur-sm px-3 py-0.5 rounded-full font-mono">
              {time}
            </div>
          </div>
        </div>

        {/* Sunrise/Sunset - Compact Row */}
        {today && (
          <div className="flex justify-center gap-6 mt-3 pt-3 border-t border-white/20 text-sm text-white ">
            <div className="flex items-center gap-1">
              <Sunrise size={14} />
              <span>{today.astro.sunrise}</span>
            </div>
            <div className="flex items-center gap-1">
              <Sunset size={14} />
              <span>{today.astro.sunset}</span>
            </div>
          </div>
        )}
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {/* Real Feel */}
        <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
            <Thermometer size={18} className="text-blue-500" />
            <span>Real Feel</span>
          </div>
          <div className="text-xl font-semibold text-gray-800">
            {current.feelslike_c.toFixed(1)}°
          </div>
        </div>

        {/* Wind */}
        <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
            <Wind size={18} className="text-green-500" />
            <span>Wind</span>
          </div>
          <div className="text-xl font-semibold text-gray-800">
            {current.wind_kph.toFixed(1)} km/h
          </div>
        </div>

        {/* Pressure */}
        <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
            <Gauge size={18} className="text-purple-500" />
            <span>Pressure</span>
          </div>
          <div className="text-xl font-semibold text-gray-800">
            {current.pressure_mb.toFixed(0)} mb
          </div>
        </div>

        {/* UV Index */}
        <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
            <div className="w-4 h-4 rounded-full bg-yellow-400" />
            <span>UV Index</span>
          </div>
          <div className="text-xl font-semibold text-gray-800">{current.uv.toFixed(1)}</div>
        </div>

        {/* Humidity */}
        <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
            <Droplets size={18} className="text-cyan-500" />
            <span>Humidity</span>
          </div>
          <div className="text-xl font-semibold text-gray-800">{current.humidity}%</div>
        </div>

        {/* Visibility */}
        <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
            <Eye size={18} className="text-gray-500" />
            <span>Visibility</span>
          </div>
          <div className="text-xl font-semibold text-gray-800">{current.vis_km.toFixed(1)} km</div>
        </div>
      </div>
    </div>
  )
}
